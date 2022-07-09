export interface User {
  _id: string,
  email: string,
  token: string  
}

export interface State {
  counter: number
  message: string,
  user?: User
}

export interface Action {
  type: string
  payload: any
}

export interface ActionIncrement {
  type: string
  payload: number
}

export interface ActionUpdateMsg {
  type: string
  payload: string
}

export interface ActionSetUser {
  type: string
  payload: User
}

export enum Actions {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
  SET_USER = "SET_USER"
}

// ACTION creators
const actionCreate = (type: string, payload: any): Action => ({ type, payload })
export const actionIncrement = (): ActionIncrement =>
  actionCreate(Actions.INCREMENT, 1)
export const actionUpdateMsg = (msgNew: string): ActionUpdateMsg =>
  actionCreate(Actions.UPDATE_MESSAGE, msgNew)
export const actionSetUser = (user: User): ActionSetUser => 
  actionCreate(Actions.SET_USER, user)

  // REDUDER function (manages state updates)
export const reducer = (state: State, action: Action): State => {
  console.log("ACTION received: ", action)

  const { type, payload } = action

  switch (type) {
    case Actions.INCREMENT:
      return { ...state, counter: state.counter + payload }
    case Actions.UPDATE_MESSAGE:
      return { ...state, message: payload }
    case Actions.SET_USER:
      return { ...state, user: payload}
    default:
      return state
  }
}
