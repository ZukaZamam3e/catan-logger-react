import { DiceRollModel } from "../models/DiceRollModel";
import CSS from 'csstype';

interface DiceRollRowProps {
    diceRoll: DiceRollModel;
}

export default function DiceRollRow(props: DiceRollRowProps) {
    return (
        <div>
            {props.diceRoll.diceNumber}: {props.diceRoll.diceRolls}
        </div>
    );
}