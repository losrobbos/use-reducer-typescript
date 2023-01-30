import { ActionIncrement, ActionSetUser, ActionTodoAdd, ActionTypes, ActionUpdateMsg, Todo, User } from "./types"

// action creators
export const actionIncrement = (): ActionIncrement => ({ type: ActionTypes.INCREMENT, payload: 1 })
export const actionUpdateMsg = (msgNew: string): ActionUpdateMsg => ({type: ActionTypes.UPDATE_MESSAGE, payload: msgNew })
export const actionSetUser = (user: User | undefined): ActionSetUser => ({ type: ActionTypes.SET_USER, payload: user})

// action todos
export const actionTodoAdd = (todo: Todo): ActionTodoAdd => ({type: ActionTypes.TODO_ADD, payload: todo})
export const actionTodoUpdate = (todo: Partial<Todo>) => ({type: ActionTypes.TODO_UPDATE, payload: todo})
export const actionTodoDelete = (todoId: string) => ({type: ActionTypes.TODO_DELETE, payload: todoId})

// action

// todo: action cars