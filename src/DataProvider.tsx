import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"

enum Actions {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE"
}

interface State {
  counter: number,
  message: string
}

interface Action {
  type: string,
  payload: any
}

interface ActionIncrement {
  type: string,
  payload: number
}

interface ActionUpdateMsg {
  type: string,
  payload: string
}

interface Context {
  state: State, dispatch: Dispatch<Action>
}

const actionCreate = (type: string, payload: any): Action => ({ type, payload })
export const actionIncrement = (): ActionIncrement => actionCreate(Actions.INCREMENT, 1)
export const actionUpdateMsg = (msgNew: string): ActionUpdateMsg => actionCreate(Actions.UPDATE_MESSAGE, msgNew)

const reducer = (state: State, action: Action): State => {

  console.log("ACTION received: ", action)

  const { type, payload } = action

  switch (type) {
    case Actions.INCREMENT:
      return { ...state, counter: state.counter + payload }
    case Actions.UPDATE_MESSAGE:
      return { ...state, message: payload };
    default:
      return state
  }
}

const initialState: State = { counter: 0, message: "Hello" }
const initialContext: Context = {
  state: initialState,
  dispatch: () => {}
}


const DataContext = createContext<Context>(initialContext)
export const useDataContext = () => useContext(DataContext)

export const DataProvider = ({children}: { children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

