import './App.css'
import { useDataContext } from './DataProvider'
import { actionIncrement, actionSetUser, actionUpdateMsg, User } from './reducer'

function App() {

  const { state, dispatch } = useDataContext()

  const handleUpdateMessage = () => {
    const msgNew = prompt("New msg pleeze", state.message)
    if (!msgNew) return
    dispatch(actionUpdateMsg(msgNew))
  }

  const handleLogin = () => {
    const userFake: User = { _id: Date.now().toString(), email: "user@user.com", token: "ey12345" }
    dispatch(actionSetUser(userFake)) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => dispatch(actionIncrement())}>
          count is: {state.counter}
        </button>
        <div onClick={handleUpdateMessage}>
          Message: {state.message}
        </div>
        {
          state.user ? 
          <div>You are logged in, dude!</div> : 
          <button onClick={handleLogin}>Login</button>
        }
      </header>
    </div>
  )
}

export default App
