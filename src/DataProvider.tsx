import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react"
import { ActionsAll, ActionTypes, State } from "./types"
import { reducer } from "./reducer"

interface Context {
  state: State, dispatch: Dispatch<ActionsAll>
}

const DataContext = createContext<Context>({} as Context)

export const useDataContext = () => useContext(DataContext)

// Prepare initial state (= dummy data)
const initialState: State = {
  loading: false,
  counter: 0, 
  message: "Hello", 
  todos: [], 
  cars: [],
  cart: [],
  // start with empty filter settings
  filter: {
    searchTerm: "",
    year: undefined
  }
}

// Provider which shares / provides state to components 
export const DataProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  // LOAD DATA FROM API (show loading spinner during fetching)
  useEffect(() => {

    // three steps
    // 1. set loading state to TRUE (=> show loading spinner)    
    dispatch({
      type: ActionTypes.LOADING_UPDATE,
      payload: true
    })
    // 2. fetch data (fake API call)
    setTimeout(() => {

      // fetch from API....
      const todosReturnedFromApi = [
        { _id: "t1", title: "Use Reducer with filter", done: false },
        { _id: "t2", title: "GraphQL small demo", done: false },
      ]
      dispatch({
        type: ActionTypes.TODOS_SET,
        payload: todosReturnedFromApi
      })

      // 3. set loading state to FALSE again (=> hide loading spinner)
      dispatch({
        type: ActionTypes.LOADING_UPDATE,
        payload: false
      })
    }, 3000)

  }, [])



  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}

