import { PlayerModel } from "../models/PlayerModel";
import CSS from 'csstype';

interface PlayerRowProps {
    player: PlayerModel;
}

export default function PlayerRow(props: PlayerRowProps) {
    let color: string = props.player.color;

    if (color === "white") {
        color = "black";
    }

    const playerStyle: CSS.Properties = {
        color: color
    };

    return (
        <div key={props.player.playerId} style={playerStyle}>
            {props.player.turnOrder} - {props.player.name} - {props.player.color}{props.player.winner && " - WINNER!!!"}
        </div>
    )
}