import { PlayerModel } from "../models/PlayerModel";
import CSS from 'csstype';

interface PlayerRowEditProps {
    player: PlayerModel;
    onChange: (p: number, e:any) => void;
    onDelete: (p: number) => void;
}

export default function PlayerRowEdit(props: PlayerRowEditProps) {
    return (
        <div>
            <div>
                <label>Turn Order:</label>
                <input type="number" name="turnOrder" value={props.player.turnOrder} onChange={(e) => { props.onChange(props.player.playerId, e)}}/>
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={props.player.name} onChange={(e) => { props.onChange(props.player.playerId, e)}}/>
            </div>
            <div>
                <label>Color:</label>
                <select name="color" value={props.player.color} onChange={(e) => { props.onChange(props.player.playerId, e)}}>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                </select>
            </div>
            <div>
                <label>Winner:</label>
                <input type="checkbox" name="winner" checked={props.player.winner} onChange={(e) => { props.onChange(props.player.playerId, e)}}/>
            </div>
            <div>
                <button onClick={() => props.onDelete(props.player.playerId)}>
                    Delete Player
                </button>
            </div>
            {props.player.turnOrder} - {props.player.name} - {props.player.color}{props.player.winner && " - WINNER!!!"}
        </div>
    )
}