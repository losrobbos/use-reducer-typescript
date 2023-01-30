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

    // the todo actions
    case ActionTypes.TODO_ADD:
      return { ...state, todos: [...state.todos, payload] }
    case ActionTypes.TODO_UPDATE:
      return { ...state, todos: state.todos.map( todo => {
        return todo._id === payload._id ? { ...todo, ...payload } : todo
      }) }
    case ActionTypes.TODO_DELETE:
      return { ...state, todos: state.todos.filter( todo => todo._id !== payload ) }

    // todo: the car actions

    // action not known => return current state unchanged
    default:
      return state
  }
}
