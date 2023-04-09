import { GameModel } from "../models/GameModel";
import CSS from 'csstype';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayerRow from "./PlayerRow";
import DiceRollRow from "./DiceRollRow";

interface GameRowProps {
    game: GameModel;
    onSelectGame: (game: GameModel) => void;
}

export default function GameRow(props:GameRowProps) : JSX.Element {
    const gameCardStyle: CSS.Properties = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "10px",
        rowGap: "10px",
        border: "1px solid",
        borderRadius: "5px",
        margin: "5px",
        boxShadow: "0 2px 2px 2px rgba(9, 9, 9, 0.23)",
    };

    const columnStyle: CSS.Properties = {
        textAlign: "left",
        paddingLeft: "10px",
        borderRight: "1px solid"
    };

    const commandColumnStyle: CSS.Properties = {
        justifyContent: "space-evenly",
        justifyItems: "center",
        alignContent: "space-evenly",
        alignItems: "center",
        display: "grid",
        gridTemplateColumns: "1fr",
    };

    const commandButtonStyle: CSS.Properties = {
        // border: "1px solid",
        borderRadius: "5px",
        padding: "3px",
        maxWidth: "32px",
        maxHeight: "32px",
    };

    const diceRollsStyle: CSS.Properties = {
        display: "grid",
        gridTemplateRows: "repeat(6, 20px)",
        gridAutoFlow: "column",
    };

    const diceRollStyle: CSS.Properties = {
        textAlign: "right",
        gridAutoFlow: "column",
    };


    return (
        <div style={gameCardStyle}>
            <div style={columnStyle}>
                <label>Date Played: {props.game.date.toLocaleDateString()}</label>
                <div>
                    Players:
                </div>
                {props.game.players.map((player, index) => (
                    <PlayerRow key={player.playerId} player={player} />
                ))}
            </div>
            <div style={columnStyle}>
                <div>
                    <label>Dice Stats</label>
                </div>
                <div>
                    <label>Rolls: {props.game.totalDiceRolls}</label>
                </div>
                <div style={diceRollsStyle}>
                    {props.game.diceRolls.map((diceRoll, index) => (
                        <DiceRollRow key={diceRoll.diceRollId} diceRoll={diceRoll}/>
                    ))}
                </div>
                
            </div>
            <div style={commandColumnStyle}>
                <button
                    style={commandButtonStyle}
                    onClick={() => { props.onSelectGame(props.game)}}
                >
                    <FontAwesomeIcon
                        icon={["fas", "pencil"]}
                        size="lg"
                    />
                </button>
                <button
                    style={commandButtonStyle}
                // onClick={onClick}
                >
                    <FontAwesomeIcon
                        icon={["fas", "trash"]}
                        size="lg"
                    />
                </button>
            </div>
        </div>
    );
}