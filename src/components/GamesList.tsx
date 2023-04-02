import GameRow from "./GameRow";
import { useState } from "react";
import {GameModel} from "../models/GameModel"

export default function GamesList() {
    const today = new Date();
    const weekLater = new Date();
    weekLater.setDate(weekLater.getDate() + 7)

    const games:GameModel[] = [{
        gameId: 0,
        date: today,
        players: [{
            playerId: 0,
            color: "blue",
            name: "zukazamam3e",
            turnOrder: 1,
            winner: true
        },{
            playerId: 0,
            color: "red",
            name: "chaosdeathblade",
            turnOrder: 2,
            winner: false
        },{
            playerId: 0,
            color: "green",
            name: "srotu",
            turnOrder: 3,
            winner: false
        },{
            playerId: 0,
            color: "white",
            name: "falconpunchjr",
            turnOrder: 4,
            winner: false
        },{
            playerId: 0,
            color: "purple",
            name: "djwheezy",
            turnOrder: 5,
            winner: false
        },{
            playerId: 0,
            color: "orange",
            name: "weage123",
            turnOrder: 6,
            winner: false
        }],
        totalDiceRolls: 42,
        diceRolls: [{
            diceRollId: 1,
            diceNumber: 2,
            diceRolls: 1
        },{
            diceRollId: 2,
            diceNumber: 3,
            diceRolls: 2
        },{
            diceRollId: 3,
            diceNumber: 4,
            diceRolls: 5
        },{
            diceRollId: 4,
            diceNumber: 5,
            diceRolls: 7
        },{
            diceRollId: 5,
            diceNumber: 6,
            diceRolls: 6
        },{
            diceRollId: 6,
            diceNumber: 7,
            diceRolls: 3
        },{
            diceRollId: 7,
            diceNumber: 8,
            diceRolls: 7
        },{
            diceRollId: 8,
            diceNumber: 9,
            diceRolls: 7
        },{
            diceRollId: 9,
            diceNumber: 10,
            diceRolls: 4
        },{
            diceRollId: 10,
            diceNumber: 11,
            diceRolls: 0
        },{
            diceRollId: 11,
            diceNumber: 12,
            diceRolls: 0
        }]
    },{
        gameId: 0,
        date: weekLater,
        players: [{
            playerId: 0,
            color: "blue",
            name: "zukazamam3e",
            turnOrder: 1,
            winner: false
        },{
            playerId: 1,
            color: "red",
            name: "chaosdeathblade",
            turnOrder: 2,
            winner: false
        },{
            playerId: 2,
            color: "green",
            name: "srotu",
            turnOrder: 3,
            winner: false
        },{
            playerId: 3,
            color: "white",
            name: "falconpunchjr",
            turnOrder: 4,
            winner: false
        },{
            playerId: 4,
            color: "purple",
            name: "djwheezy",
            turnOrder: 5,
            winner: true
        },{
            playerId: 5,
            color: "orange",
            name: "weage123",
            turnOrder: 6,
            winner: false
        }],
        totalDiceRolls: 42,
        diceRolls: [{
            diceRollId: 1,
            diceNumber: 2,
            diceRolls: 1
        },{
            diceRollId: 2,
            diceNumber: 3,
            diceRolls: 2
        },{
            diceRollId: 3,
            diceNumber: 4,
            diceRolls: 5
        },{
            diceRollId: 4,
            diceNumber: 5,
            diceRolls: 7
        },{
            diceRollId: 5,
            diceNumber: 6,
            diceRolls: 6
        },{
            diceRollId: 6,
            diceNumber: 7,
            diceRolls: 3
        },{
            diceRollId: 7,
            diceNumber: 8,
            diceRolls: 7
        },{
            diceRollId: 8,
            diceNumber: 9,
            diceRolls: 7
        },{
            diceRollId: 9,
            diceNumber: 10,
            diceRolls: 4
        },{
            diceRollId: 10,
            diceNumber: 11,
            diceRolls: 0
        },{
            diceRollId: 11,
            diceNumber: 12,
            diceRolls: 0
        }]
    }]

    return (
        <div>
            {games.map((game, index) => (
                <GameRow key={game.gameId} game={game} />
            ))}
            
        </div>
        
    );
}