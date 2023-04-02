import GameRow from "./GameRow";
import { useState } from "react";
import {GameModel} from "../models/GameModel"



export default function GamesList() {
    const today = new Date();

    const games:GameModel[] = [{
        gameId: 0,
        gamePlayedDate: today
    }]

    return (
        <div>
            <h1>Games List</h1>
            {games.map((game, index) => (
                <GameRow key={game.gameId} game={game} />
            ))}
            
        </div>
        
    );
}