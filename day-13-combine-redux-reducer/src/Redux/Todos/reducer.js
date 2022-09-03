import { ADD_TODO } from "./action";

const init = { todos: [] };
export const todosReducer = (store = init, { type, payload }) => {
  switch (type) {
    //this is for store as memory
    //redux stores everything  in memory
    //  case ADD_TODO: return {...store,todos:[...store.todos,payload]};
    //this is while using db.json
    case ADD_TODO:
      return { ...store, todos: payload };
    default:
      return store;
  }
};
