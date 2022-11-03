import { ActionIncrement, ActionSetUser, ActionTypes, ActionUpdateMsg, User } from "./types"

// action creators
export const actionIncrement = (): ActionIncrement => ({ type: ActionTypes.INCREMENT, payload: 1 })
export const actionUpdateMsg = (msgNew: string): ActionUpdateMsg => ({type: ActionTypes.UPDATE_MESSAGE, payload: msgNew })
export const actionSetUser = (user: User | undefined): ActionSetUser => ({ type: ActionTypes.SET_USER, payload: user})
