export interface User {
  _id: string;
  email: string;
  token: string;
}

export interface State {
  counter: number;
  message: string;
  user?: User;
}

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
  SET_USER = "SET_USER",
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

// all possible actions union
export type ActionsAll = ActionIncrement | ActionUpdateMsg | ActionSetUser;
