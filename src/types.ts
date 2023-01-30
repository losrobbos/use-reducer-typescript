export interface User {
  _id: string;
  email: string;
  token: string;
}

export interface Todo {
  _id: string,
  title: string,
  done: boolean
}

export interface Car {
  _id: string,
  name: string,
  year: number
}

export interface State {
  counter: number;
  message: string;
  user?: User;
  todos: Todo[],
  cars: Car[]
}

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
  SET_USER = "SET_USER",
  TODO_ADD = "TODO_ADD",
  TODO_UPDATE = "TODO_UPDATE",
  TODO_DELETE = "TODO_DELETE",
  CAR_ADD = "ADD_CAR",
  CAR_UPDATE = "CAR_UPDATE",
  CAR_DELETE = "CAR_DELETE"
}

// concrete action types
export interface ActionIncrement {
  type: ActionTypes.INCREMENT;
  payload: number;
}

export interface ActionUpdateMsg {
  type: ActionTypes.UPDATE_MESSAGE;
  payload: string;
}

export interface ActionSetUser {
  type: ActionTypes.SET_USER;
  payload: User | undefined;
}

export interface ActionTodoAdd {
  type: ActionTypes.TODO_ADD,
  payload: Todo,
}

export interface ActionTodoUpdate {
  type: ActionTypes.TODO_UPDATE,
  payload: Partial<Todo>
}

export interface ActionTodoDelete {
  type: ActionTypes.TODO_DELETE,
  payload: string
}

// all possible actions union
export type ActionsAll = ActionIncrement | ActionUpdateMsg | ActionSetUser | 
  ActionTodoAdd | ActionTodoUpdate | ActionTodoDelete ;
