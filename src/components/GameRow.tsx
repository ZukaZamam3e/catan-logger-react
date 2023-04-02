import { GameModel } from "../models/GameModel";

interface GameRowProps {
    game: GameModel;
}

export default function GameRow(props:GameRowProps) : JSX.Element {
    return (
        <div>
            <label>{props.game.date.toLocaleDateString()}</label>
        </div>
    );
}