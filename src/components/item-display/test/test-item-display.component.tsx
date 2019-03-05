import React, {useState} from 'react'
import {
    EquipmentType,
    Item,
    MainStat,
    Rarity,
    SecondaryStat
} from "../../../models/items.models";
import cuid from 'cuid';
import {ItemDisplayComponent} from "../item-display.component";

export const TestItemDisplayComponent: React.FC<{}> = () => {

    const [item, setItem] = useState(null as (Item | null));

    let levelInput: HTMLInputElement;
    let rarityInput: HTMLSelectElement;
    let typeInput: HTMLSelectElement;
    let mainStatInput: HTMLSelectElement;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setItem({
            id: cuid(),
            level: parseFloat(levelInput.value),
            rarity: Rarity[rarityInput.value],
            type: EquipmentType[typeInput.value],
            mainStat: MainStat[mainStatInput.value],
            secondaryStats: new Map<SecondaryStat, number>()
        })
    };

    return (
        <div>
            <ItemDisplayComponent item={item}/>
            <form onSubmit={handleSubmit}>
                <input name="level" ref={(ref) => {if(ref) levelInput = ref}} /><br/>
                <select name="rarity" ref={(ref) => {if(ref) rarityInput = ref}}>
                    {Object.keys(Rarity).map(key => <option value={key}>{Rarity[key]}</option>)}
                </select><br/>
                <select name="type" ref={(ref) => {if(ref) typeInput = ref}}>
                    {Object.keys(EquipmentType).map(key => <option value={key}>{EquipmentType[key]}</option>)}
                </select><br/>
                <select name="mainstat" ref={(ref) => {if(ref) mainStatInput = ref}}>
                    {Object.keys(MainStat).map(key => <option value={key}>{MainStat[key]}</option>)}
                </select><br/>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )

};