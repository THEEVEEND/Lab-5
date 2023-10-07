import { Action, Actions } from "../types/store";

export const changeHead = (payload: string): Action => {
    return {
        type: Actions.CHANGE_HEAD,
        payload
    }
}

export const changeChest = (payload: string): Action => {
    return {
        type: Actions.CHANGE_CHEST,
        payload
    }
}

export const changeLegs = (payload: string): Action => {
    return {
        type: Actions.CHANGE_LEGS,
        payload
    }
}