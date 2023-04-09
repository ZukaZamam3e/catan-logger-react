import GameRow from "./GameRow";
import { useState, useEffect } from "react";
import {GameModel} from "../models/GameModel"
import axios from 'axios'
import EditGame from "./EditGame";

export default function GamesList() {
    let newGame: GameModel = {
        gameId: -1,
        date: new Date(),
        players: [],
        totalDiceRolls: 0,
        diceRolls: []
    };

    const [games, setGames] = useState<GameModel[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState({ show: false, game: newGame});

    const fetchData = () => {
        setLoading(true);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST",
            }
          };

        axios.get(process.env.REACT_APP_API_URL + "/Game/Get", axiosConfig)
            .then(res => {
                console.log(res.data);
                const data:GameModel[] = res.data.map((game:any): GameModel => ({
                    gameId: game.gameId,
                    date: new Date(game.date),
                    totalDiceRolls: game.totalDiceRolls,
                    players: game.players,
                    diceRolls: game.diceRolls
                }))

                setGames(data);
                setLoading(false);

            }).catch(() => {
                setError(true);
            });
    }

    const onGameSave = (saveData:GameModel) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        axios.post(process.env.REACT_APP_API_URL + "/Game/Save", saveData, axiosConfig)
        .then(res => {
            console.log(res.data);

            const updatedGames = games.map((g:GameModel, i: number) => {
                if(saveData.gameId == g.gameId) {
                    return {
                        gameId: res.data.gameId,
                        date: new Date(res.data.date),
                        totalDiceRolls: res.data.totalDiceRolls,
                        players: res.data.players,
                        diceRolls: res.data.diceRolls
                    };
                } else {
                    return g;
                }
    
            });
    
            setGames(updatedGames);


            setEditing({show: false, game: newGame});
        }).catch(() => {
            return "error";
        });
    }

    const addNew = () => {
        setEditing({show: true, game: newGame});
    }

    const onSelectGame = (game: GameModel) => {
        setEditing({show: true, game: game});
    }

    const onCancelSelectedGame = () => {
        setEditing({show: false, game: newGame});
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Data is loading...</h1>
    } else if (editing.show) {
        return <EditGame 
                    game={editing.game} 
                    onCancelSelectedGame={onCancelSelectedGame} 
                    onGameSave={onGameSave}
                />
    } else if(Object.keys(games).length > 0) {
        return (<div>
                    <button onClick={addNew}>Add New Game</button>
                    {games.map((game:GameModel, index) => (
                        <GameRow 
                            key={game.gameId} 
                            game={game} 
                            onSelectGame={onSelectGame} 

                        />
                    ))}
                </div>);
    } else if (Object.keys(games).length === 0) {
        return (<div>
                    <button onClick={addNew}>Add New Game</button>
                    <h1>No games found.</h1>
                </div>);
    } else {
        return <h1>Error loading data</h1>
    }
}