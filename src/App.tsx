import { useReducer } from 'react'
import './App.css'

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
  payload?: any
}

const actionCreate = (type: string, payload: any) => ({ type, payload})
const actionIncrement = () => actionCreate(Actions.INCREMENT, 1)
const actionUpdateMsg = (msgNew: string) => actionCreate(Actions.UPDATE_MESSAGE, msgNew)

const reducer = (state: any, action: Action): State => {

  const {  type, payload } = action

  switch(type) {
    case Actions.INCREMENT:
      return {...state, counter: state.counter + payload}
    case Actions.UPDATE_MESSAGE:
      return {...state, message: payload};
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { counter: 0, message: "Hello" } )

  const handleUpdateMessage = () => {
    const msgNew = prompt("New msg pleeze", state.message)
    if(!msgNew) return
    dispatch(actionUpdateMsg(msgNew))
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
      </header>
    </div>
  )
}

export default App
