import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"
import { ActionsAll, State } from "./actions"
import { reducer } from "./reducer"

interface Context {
  state: State, dispatch: Dispatch<ActionsAll>
}

// Prepare initial state setup
const initialState: State = { counter: 0, message: "Hello" }

const DataContext = createContext<Context>({} as Context)

export const useDataContext = () => useContext(DataContext)


// Provider which shares / provides state to components 
export const DataProvider = ({children}: { children: ReactNode}) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

