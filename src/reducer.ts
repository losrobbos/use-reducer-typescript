export interface State {
  counter: number
  message: string
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

export enum Actions {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
}

// ACTION creators
const actionCreate = (type: string, payload: any): Action => ({ type, payload })
export const actionIncrement = (): ActionIncrement =>
  actionCreate(Actions.INCREMENT, 1)
export const actionUpdateMsg = (msgNew: string): ActionUpdateMsg =>
  actionCreate(Actions.UPDATE_MESSAGE, msgNew)


  // REDUDER function (manages state updates)
export const reducer = (state: State, action: Action): State => {
  console.log("ACTION received: ", action)

  const { type, payload } = action

  switch (type) {
    case Actions.INCREMENT:
      return { ...state, counter: state.counter + payload }
    case Actions.UPDATE_MESSAGE:
      return { ...state, message: payload }
    default:
      return state
  }
}
