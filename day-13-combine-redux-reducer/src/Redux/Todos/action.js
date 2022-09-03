export const ADD_TODO = "ADD_TODO";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});
