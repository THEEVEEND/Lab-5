export interface stateTypes {
    head: string,
    chest: string,
    legs: string
}

export enum headTypes {
    head1 = "head1",
    head2 = "head2",
    head3 = "head3"
}

export enum chestTypes {
    chest1 = "chest1",
    chest2 = "chest2",
    chest3 = "chest3"
}

export enum legsTypes {
    legs1 = "legs1",
    legs2 = "legs2",
    legs3 = "legs3"
}

export interface Action {
    type: Actions;
    payload: string;
}

export enum Actions {
    "CHANGE_HEAD" = "CHANGE_HEAD",
    "CHANGE_CHEST" = "CHANGE_CHEST",
    "CHANGE_LEGS" = "CHANGE_LEGS"
}

export type Observer = HTMLElement & { render: () => void}