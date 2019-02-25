import {createStandardAction} from "typesafe-actions";
import {Item} from "./items.models";

const TEST_SET_ITEM = '@items/TEST_SET_ITEM';

const testSetItem = createStandardAction(TEST_SET_ITEM)<{slot: string; item: Item}>();

export const itemsActions = {
    testSetItem,
};