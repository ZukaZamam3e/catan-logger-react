export interface PlayerModel {
    playerId: number;
    color: string;
    name: string;
    turnOrder: number;
    winner: boolean;
    deletedRecord: boolean;
}