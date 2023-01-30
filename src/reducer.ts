import { ActionsAll, State, ActionTypes } from "./types"

  // REDUCER function (manages state updates)
export const reducer = (state: State, action: ActionsAll): State => {
  console.log("ACTION received: ", action)

  const { type, payload } = action

  /**
   * Depending on the Action Type 
   * => Typescript now guess the payload correctly!!!
   */
  switch (type) {
    case ActionTypes.LOADING_UPDATE:
      return { ...state, loading: payload }
    case ActionTypes.INCREMENT:
      return { ...state, counter: state.counter + payload };
    case ActionTypes.UPDATE_MESSAGE:
      return { ...state, message: payload };
    case ActionTypes.SET_USER:
      return { ...state, user: payload };

    // the todo actions
    case ActionTypes.TODOS_SET:
      return { ...state, todos: payload }
    case ActionTypes.TODO_ADD:
      return { ...state, todos: [...state.todos, payload] };
    case ActionTypes.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
      };
    case ActionTypes.TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo._id === payload._id ? { ...todo, ...payload } : todo;
        }),
      };

    // todo: the car actions
    case ActionTypes.CART_ADD:
      return { ...state, cart: [...state.cart, payload] };
    case ActionTypes.CART_DELETE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem._id !== payload),
      };
    case ActionTypes.CART_UPDATE:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          return cartItem._id === payload._id ? { ...cartItem, ...payload } : cartItem;
        }),
      };

    // handle the FILTER update case
    case ActionTypes.FILTER_UPDATE:
      return {
        ...state,
       filter: { ...state.filter, ...payload }
      }

    // action not known => return current state unchanged
    default:
      return state;
  }
}
