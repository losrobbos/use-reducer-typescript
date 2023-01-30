import './App.css'
import { useDataContext } from './DataProvider'
import { actionIncrement, actionSetUser, actionUpdateMsg } from './actions'
import { ActionTypes, User } from './types'
import { useEffect } from 'react'

function App() {

  // DATEN / STATE
  const { state, dispatch } = useDataContext()

  // EXTRACT data we need in this page
  const { todos, filter } = state


  // EVENT LISTENER
  const handleUpdateMessage = () => {
    const msgNew = "Hello, " + Math.random().toFixed(2)
    // const msgNew = prompt("New msg pleeze", state.message)
    // if (!msgNew) return

    // lengthy version => dispatch an object to reducer
    // dispatch({ type: ActionTypes.UPDATE_MESSAGE, payload: msgNew  })

    // shorter version: call a function which creates an action object
    dispatch(actionUpdateMsg(msgNew))
  }

  const toggleLogin = () => {
    if (!state.user) {
      const userFake: User = { _id: Date.now().toString(), email: "user@user.com", token: "ey12345" }
      dispatch(actionSetUser(userFake))
    }
    else {
      dispatch(actionSetUser(undefined))
    }
  }

  const updateFilterSearchTerm = (searchTerm: string) => {
    console.log("Search term: ", searchTerm)
    dispatch({ type: ActionTypes.FILTER_UPDATE, payload: { searchTerm } })
  }

  // APPLY FILTERS
  let filteredTodos = todos

  if (filter.searchTerm) {
    filteredTodos = filteredTodos.filter(todo => todo.title.toLowerCase().includes(filter.searchTerm.toLowerCase()))
  }
  // if(filter.year) {
  //   filteredTodos = filteredTodos.filter(todo => todo.year === filter.year)
  // }

  return (
    <div className="App">
      <header className="App-header">

        <button type="button" onClick={() => dispatch(actionIncrement())}>
          count is: {state.counter}
        </button>
        {
          state.user ?
            <button onClick={toggleLogin}>Logout</button> :
            <button onClick={toggleLogin}>Login</button>
        }
        <div onClick={handleUpdateMessage}>
          Message: {state.message}
        </div>

        {
          state.loading ?
            <div>
              <img src="https://media.giphy.com/media/xUOxfj6cTg3ezmjIoo/giphy.gif" />
            </div> :
            <div className="todos-container">
              <div>
                <input type="text" onChange={(ev) => updateFilterSearchTerm(ev.target.value)} placeholder="Search term..." />
              </div>

              <div className="todos">
                {filteredTodos.map((todo, index) => (
                  <div key={todo._id}>{index + 1} {todo.title}</div>
                  // <Todo todo={todo} index={index} />
                ))}
              </div>
            </div>
        }

      </header>
    </div>
  )
}

export default App
