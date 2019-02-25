export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export enum TodosFilter {
    ALL = "Show All",
    COMPLETED = "Completed",
    ACTIVE = "Active",
}