import { useState } from "react";
import { GameModel } from "../models/GameModel";
import { PlayerModel } from "../models/PlayerModel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PlayerRowEdit from "./PlayerRowEdit";
import DiceRollRowEdit from "./DiceRowEdit";
import { DiceRollModel } from "../models/DiceRollModel";
import axios from 'axios'

interface EditGameProps {
    game: GameModel;
    onCancelSelectedGame: () => void;
    onGameSave: (saveData: GameModel) => void;
}

export default function EditGame(props: EditGameProps) {
    const [date, setDate] = useState(props.game.date);
    const [newPlayerId, setNewPlayerId] = useState(-1);
    const [newDiceRollId, setNewDiceRollId] = useState(-1);
    const [players, setPlayers] = useState(props.game.players);
    const [diceRolls, setDiceRolls] = useState(props.game.diceRolls);

    const onPlayerChange = (id: number, e:any) => {
        const updatedPlayers = players.map((p:PlayerModel, i: number) => {
            if(id == p.playerId) {
                if(e.target.name === "winner") {
                    return { ...p, [e.target.name]: e.target.checked}
                } else {
                    return { ...p, [e.target.name]: e.target.value}
                }
            } else {
                return p;
            }

        });

        setPlayers(updatedPlayers);
    }

    const onPlayerDelete = (id: number) => {
        if(id < 0) { 
            // delete from list. hasn't been saved to the server.
            setPlayers(players.filter(p => p.playerId !== id));
        } else {
            // mark for delete so it can be deleted on the server
            const updatedPlayers = players.map((p:PlayerModel, i: number) => {
                if(id == p.playerId) {
                    console.log('setting deleteRecord to true');
                        return { ...p, ["deletedRecord"]: true}
                } else {
                    return p;
                }
    
            });
    
            setPlayers(updatedPlayers);
            console.log(updatedPlayers);
        }
    }

    const onPlayerAdd = () => {
        if (Object.keys(players).length < 6) {
            setPlayers([...players, {
                playerId: newPlayerId,
                color: "",
                name: "",
                turnOrder: 1,
                winner: false,
                deletedRecord: false
            }]);

            setNewPlayerId((result) => result - 1);
        }
    }

    const onDiceRollChange = (id: number, e:any) => {
        const updatedDiceRolls = diceRolls.map((d:DiceRollModel, i: number) => {
            if(id == d.diceRollId) {
                return { ...d, [e.target.name]: e.target.value }
            } else {
                return d;
            }

        });

        setDiceRolls(updatedDiceRolls);
    }

    const onDiceRollDelete = (id: number) => {
        if(id < 0) { 
            // delete from list. hasn't been saved to the server.
            setDiceRolls(diceRolls.filter(d => d.diceRollId !== id));
        } else {
            // mark for delete so it can be deleted on the server
            const updatedDiceRolls = diceRolls.map((d:DiceRollModel, i: number) => {
                if(id == d.diceRollId) {
                        return { ...d, ["deletedRecord"]: true}
                } else {
                    return d;
                }
    
            });
    
            setDiceRolls(updatedDiceRolls);
        }
    }

    const onDiceRollAdd = () => {
        if (Object.keys(diceRolls).length < 11) {
            setDiceRolls([...diceRolls, {
                diceRollId: newDiceRollId,
                diceNumber: 0,
                diceRolls: 0,
                deletedRecord: false
            }]);

            setNewDiceRollId((result) => result - 1);
        }
    }

    const onGameSave = () => {
        const saveData: GameModel = {
            gameId: props.game.gameId,
            date: date,
            players: players,
            diceRolls: diceRolls,
            totalDiceRolls: 0
        };

        props.onGameSave(saveData);
    }

    return (
        <div>
            <div>Editing the game!!!</div>
            <div>
                <label>Date Played: </label>
                <DatePicker selected={props.game.date} onChange={(date:Date)=> setDate(date)} /> 
            </div>
            <div>
                {players.map((player, index) => {
                    if (!player.deletedRecord) {
                        return <PlayerRowEdit
                            key={player.playerId}
                            player={player}
                            onChange={onPlayerChange}
                            onDelete={onPlayerDelete}
                        />
                    }
                })}
            </div>
            {Object.keys(players).length < 6 &&
                <div>
                    <button onClick={onPlayerAdd}>
                        Add Player
                    </button>
                </div>
            }
            <div>
                {diceRolls.map((diceRoll, index) => {
                    if (!diceRoll.deletedRecord) {
                        return <DiceRollRowEdit
                            key={diceRoll.diceRollId}
                            diceRoll={diceRoll}
                            onChange={onDiceRollChange}
                            onDelete={onDiceRollDelete}
                        />
                    }
                })}
            </div>
            {Object.keys(diceRolls).length < 11 &&
                <div>
                    <button onClick={onDiceRollAdd}>
                        Add Dice Roll
                    </button>
                </div>
            }
            <div>
            <button onClick={onGameSave}>
                    Save
                </button>
                <button onClick={props.onCancelSelectedGame}>
                    Cancel
                </button>
            </div>
        </div>
    );
}