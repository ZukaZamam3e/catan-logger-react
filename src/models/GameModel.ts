import { PlayerModel } from "./PlayerModel";
import { DiceRollModel } from "./DiceRollModel";

export interface GameModel {
  gameId: number;
  date: Date;
  players: PlayerModel[];
  totalDiceRolls: number;
  diceRolls: DiceRollModel[];
}