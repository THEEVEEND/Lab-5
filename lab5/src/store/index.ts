import { stateTypes, Action, Actions, Observer, headTypes, chestTypes, legsTypes } from "../types/store"
import { reducer } from "./reducer"

export let state: stateTypes = {
    head: headTypes.head1,
    chest: chestTypes.chest1,
    legs: legsTypes.legs1
}

const observers: Observer[] = []

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state))
    state = reducer(action, clone)
    observers.forEach((o: Observer) => o.render())
    console.log(state)
}

export const addObserver = (observer: Observer) => {
    observers.push(observer)
}