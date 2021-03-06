declare module 'MyTypes' {
    import { StateType, ActionType } from "typesafe-actions";
    export type Store = StateType<typeof import('.').default>;
    export type RootAction = ActionType<typeof import('./root-actions').default>;
    export type RootState = StateType<typeof import('./root-reducer').default>;
}