export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export enum TodosFilter {
    ALL = "Show All",
    COMPLETED = "Completed",
    ACTIVE = "Active",
}