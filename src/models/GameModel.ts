import { PlayerModel } from "./PlayerModel";

export interface GameModel {
  gameId: number;
  date: Date;
  players: PlayerModel[];
}