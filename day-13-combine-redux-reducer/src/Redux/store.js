import { legacy_createStore as createStore, combineReducers } from "redux";

import { counterReducer } from "./Counter/reducer";

import { todosReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//  {counter:0,todos:[]}

store.subscribe(() => {
  console.log("subscribe", store.getState());
});
