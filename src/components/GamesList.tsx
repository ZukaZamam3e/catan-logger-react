import GameRow from "./GameRow";
import { useState, useEffect } from "react";
import {GameModel} from "../models/GameModel"
import axios from 'axios'

export default function GamesList() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = () => {
        axios.get(process.env.REACT_APP_API_URL + "/Game/Get")
            .then(res => {
                console.log(res.data);
                setGames(res.data.map((game:any): GameModel => ({
                    gameId: game.gameId,
                    date: new Date(game.date),
                    totalDiceRolls: game.totalDiceRolls,
                    players: game.players,
                    diceRolls: game.diceRolls
                })));
            }).catch(() => {
                setError(true);
            })

        // fetch("/Games", {
        //     mode: "no-cors"
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     setGames(data);
        // });
    }

    useEffect(() => {
        fetchData();
    }, []);


    return Object.keys(games).length > 0 ? (
        <div>
            {games.map((game:GameModel, index) => (
                <GameRow key={game.gameId} game={game} />
            ))}
        </div>
    ) : !error ? (
        <h1>Data is loading...</h1>
    ) : (
        <h1>Error loading data</h1>
    );
}