import { ActionsAll, State, ActionTypes } from "./types"

  // REDUCER function (manages state updates)
export const reducer = (state: State, action: ActionsAll): State => {
  console.log("ACTION received: ", action)

  const { type, payload } = action

  /**
   * Depending on the Action Type 
   * => Typescript now guess the payload correctly!!!
   */
  switch (type) {
    case ActionTypes.INCREMENT:
      return { ...state, counter: state.counter + payload }
    case ActionTypes.UPDATE_MESSAGE:
      return { ...state, message: payload }
    case ActionTypes.SET_USER:
      return { ...state, user: payload}
    default:
      return state
  }
}
