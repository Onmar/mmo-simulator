import {Item} from "./items.models";
import {ActionType, getType} from "typesafe-actions";
import {itemsActions} from "./items.actions";
import {combineReducers, Reducer} from "redux";

export type ItemsState = {
    item: Item | undefined;
}

export type ItemsActions = ActionType<typeof itemsActions>

const itemReducer: Reducer<Item | undefined, ItemsActions> = (state = undefined, action) => {
    switch(action.type) {
        case getType(itemsActions.testSetItem):
            return action.payload.item;
        default:
            return state;
    }
};

export const itemsReducer = combineReducers<ItemsState, ItemsActions>({
    item: itemReducer,
});
