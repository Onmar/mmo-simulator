import React from 'react'
import {Item, Rarity} from "../../../state/ducks/items/items.models";
import cuid = require("cuid");

type Props = {
    onSubmit: (item: Item) => void;
}

export const TestSetItemComponent: React.FC<Props> = props => {

    const {onSubmit} = props;

    return (
        <form
            onSubmit={() => onSubmit({id: cuid(), level: })
        }>
            <select name="rarity">
                {Object.keys(Rarity).map(key => <option value={Rarity[key]}>Rarity[key]</option>)}
            </select>
    </form>
    )

};