import { DiceRollModel } from "../models/DiceRollModel";

interface DiceRollRowEditProps {
    diceRoll: DiceRollModel;
    onChange: (id: number, e:any) => void;
    onDelete: (id: number) => void;
}

export default function DiceRollRowEdit(props: DiceRollRowEditProps) {
    return (
        <div>
            <div>
                <label>Dice Number:</label>
                <input type="number" name="diceNumber" value={props.diceRoll.diceNumber} onChange={(e) => { props.onChange(props.diceRoll.diceRollId, e)}}/>
            </div>
            <div>
                <label>Dice Rolls:</label>
                <input type="number" name="diceRolls" value={props.diceRoll.diceRolls} onChange={(e) => { props.onChange(props.diceRoll.diceRollId, e)}}/>
            </div>
            <div>
                {props.diceRoll.diceNumber}: {props.diceRoll.diceRolls}
            </div>
            <div>
                <button onClick={() => props.onDelete(props.diceRoll.diceRollId)}>
                    Delete Dice Roll
                </button>
            </div>
        </div>
    )
}