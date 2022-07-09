import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"
import { Action, reducer, State } from "./reducer"

interface Context {
  state: State, dispatch: Dispatch<Action>
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

