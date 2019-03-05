import {createStandardAction} from "typesafe-actions";
import {Item} from "../../../models/items.models";

const TEST_SET_ITEM = '@items/TEST_SET_ITEM';

const testSetItem = createStandardAction(TEST_SET_ITEM)<{item: Item}>();

export const itemsActions = {
    testSetItem,
};