export interface User {
  _id: string;
  email: string;
  token: string;
}

export interface Todo {
  _id: string;
  title: string;
  done: boolean;
}

export interface Car {
  _id: string;
  name: string;
  year: number;
}

export interface CartItem {
  _id: string;
  product: Todo | Car;
  quantity: number;
}

export interface Filter {
  year: number | undefined,
  searchTerm: string
}

export interface State {
  loading: boolean,
  counter: number;
  message: string;
  user?: User;
  todos: Todo[];
  cars: Car[];
  // inline type
  // cart: [{ _id: string, product: Todo | Car, quantity: number }]
  cart: CartItem[],
  filter: Filter
  // filter: {
  //   year: number | undefined,
  //   title: string
  // }
  // or a filter object for EACH type of items, e.g.
  // filterCars: FilterCars
  // filterTodos: FilterTodos
}

export enum ActionTypes {
  INCREMENT = "INCREMENT",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
  SET_USER = "SET_USER",
  TODOS_SET = "TODOS_SET",
  TODO_ADD = "TODO_ADD",
  TODO_UPDATE = "TODO_UPDATE",
  TODO_DELETE = "TODO_DELETE",
  CAR_ADD = "ADD_CAR",
  CAR_UPDATE = "CAR_UPDATE",
  CAR_DELETE = "CAR_DELETE",
  CART_ADD = "CART_ADD",
  CART_UPDATE = "CART_UPDATE",
  CART_DELETE = "CART_DELETE",
  FILTER_UPDATE = "FILTER_UPDATE",
  LOADING_UPDATE = "LOADING_UPDATE"
}

// for strings, numbers, booleans and objects => just ONE action needed
// for arrays => three actions needed for add, update, delete

// concrete action types

export interface ActionLoadingUpdate {
  type: ActionTypes.LOADING_UPDATE,
  payload: boolean
}

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

// TODOS actions

export interface ActionTodosSet {
  type: ActionTypes.TODOS_SET,
  payload: Todo[]
}

export interface ActionTodoAdd {
  type: ActionTypes.TODO_ADD;
  payload: Todo;
}

export interface ActionTodoUpdate {
  type: ActionTypes.TODO_UPDATE;
  payload: Partial<Todo>; // partial can contain just PARTS of todo type, e.g. just title
  // this way we can update just parts of the todo
}

export interface ActionTodoDelete {
  type: ActionTypes.TODO_DELETE;
  payload: string;
}

// CAR actions
export interface ActionCarAdd {
  type: ActionTypes.CAR_ADD;
  payload: Car;
}

export interface ActionCarUpdate {
  type: ActionTypes.CAR_UPDATE;
  payload: Partial<Car>; // partial can contain just PARTS of todo type, e.g. just title
  // this way we can update just parts of the todo
}

export interface ActionCarDelete {
  type: ActionTypes.CAR_DELETE;
  payload: string;
}

// CART Actions
export interface ActionCartAdd {
  type: ActionTypes.CART_ADD;
  payload: CartItem;
}

export interface ActionCartUpdate {
  type: ActionTypes.CART_UPDATE;
  payload: Partial<CartItem>; // partial can contain just PARTS of todo type, e.g. just title
  // this way we can update just parts of the todo
}

export interface ActionCartDelete {
  type: ActionTypes.CART_DELETE;
  payload: string;
}


export interface ActionFilterUpdate {
  type: ActionTypes.FILTER_UPDATE;
  payload: Partial<Filter>; // now we can just update ONE item in the filter, e.g. just year. using partial!
}



// all possible actions union
export type ActionsAll =
  | ActionIncrement
  | ActionUpdateMsg
  | ActionSetUser
  | ActionTodosSet
  | ActionTodoAdd
  | ActionTodoUpdate
  | ActionTodoDelete
  | ActionCarAdd 
  | ActionCarUpdate
  | ActionCarDelete
  | ActionCartAdd
  | ActionCartDelete
  | ActionCartUpdate
  | ActionFilterUpdate
  | ActionLoadingUpdate;
