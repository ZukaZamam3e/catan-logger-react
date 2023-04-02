import { GameModel } from "../models/GameModel";
import CSS from 'csstype';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GameRowProps {
    game: GameModel;
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
                {props.game.players.map((player, index) => {
                    let color: string = player.color;

                    if(color === "white") {
                        color = "black";
                    }

                    const playerStyle: CSS.Properties = {
                        color: color
                    };

                    return (
                        <div style={playerStyle}>
                            {player.turnOrder} - {player.name} - {player.color}{player.winner && " - WINNER!!!"}
                        </div>
                    )
                })}
            </div>
            <div style={columnStyle}>
                <div>
                    <label>Dice Stats</label>
                </div>
                <div>
                    <label>Rolls: {props.game.totalDiceRolls}</label>
                </div>
                <div style={diceRollsStyle}>
                    {props.game.diceRolls.map((dice, index) => (
                        <div>
                            {dice.diceNumber}: {dice.diceRolls}
                        </div>
                    ))}
                </div>
                
            </div>
            <div style={commandColumnStyle}>
                <button
                    style={commandButtonStyle}
                // onClick={onClick}
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