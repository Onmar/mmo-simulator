import React from 'react';
import { Item } from "../../state/ducks/items/items.models";
import styles from './item-display.module.css';
import Tippy from "@tippy.js/react";

type Props = {
    item: Item | undefined;
}

export const ItemDisplayComponent: React.FC<Props> = props => {
    const { item } = props;

    return (
        <div>
            <Tippy content={item ?
                (<div>
                    {JSON.stringify(item)}
                </div>)
                :
                ""
            }>
                <div className={styles.itemContainer}>
                </div>
            </Tippy>
        </div>
    )
};