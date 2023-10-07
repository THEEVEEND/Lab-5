import { stateTypes, Action, Actions } from "../types/store";

export const reducer = (action: Action, currentState: stateTypes) => {
    switch (action.type) {
        case Actions.CHANGE_HEAD:
            return {
                ...currentState,
                head: action.payload
            }
        case Actions.CHANGE_CHEST:
            return {
                ...currentState,
                chest: action.payload
            }
        case Actions.CHANGE_LEGS:
            return {
                ...currentState,
                legs: action.payload
            }
        default:
            return currentState
    }
}