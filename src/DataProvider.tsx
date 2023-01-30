import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"
import { ActionsAll, State } from "./types"
import { reducer } from "./reducer"

interface Context {
  state: State, dispatch: Dispatch<ActionsAll>
}

const DataContext = createContext<Context>({} as Context)

export const useDataContext = () => useContext(DataContext)

// Prepare initial state (= dummy data)
const initialState: State = { counter: 0, message: "Hello", todos: [], cars: [] }

// Provider which shares / provides state to components 
export const DataProvider = ({children}: { children: ReactNode}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

