import './App.css'
import { useDataContext } from './DataProvider'
import { actionIncrement, actionSetUser, actionUpdateMsg } from './actions'
import { User } from './types'

function App() {

  const { state, dispatch } = useDataContext()

  const handleUpdateMessage = () => {
    const msgNew = "Hello, " + Math.random().toFixed(2)
    // const msgNew = prompt("New msg pleeze", state.message)
    // if (!msgNew) return
    dispatch(actionUpdateMsg(msgNew))
  }

  const toggleLogin = () => {
    if(!state.user) {
      const userFake: User = { _id: Date.now().toString(), email: "user@user.com", token: "ey12345" }
      dispatch(actionSetUser(userFake)) 
    }
    else {
      dispatch(actionSetUser(undefined))
    }
  }

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
      </header>
    </div>
  )
}

export default App
