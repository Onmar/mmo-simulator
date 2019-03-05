import React from 'react';
import { Item } from "../../models/items.models";
import styles from './item-display.module.css';
import Tippy from "@tippy.js/react";

type Props = {
    item: Item | null;
}

export const ItemDisplayComponent: React.FC<Props> = props => {
    const { item } = props;

    return (
        <div>
            <Tippy content={item ? (
                <div>
                    {JSON.stringify(item, null, 2)}
                </div>
                ) : ""
            } maxWidth={1000} placement={"right-start"}>
                <div className={styles.itemContainer}>
                    {item ? item.type : ""}
                </div>
            </Tippy>
        </div>
    )
};
