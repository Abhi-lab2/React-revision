import { React, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoLists() {
  const [todos, setTodos] = useState([]);

  //to make or arrange spaces properly useage AVoid extra spaces in TEXTBox
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    //shows ID and Todos
    console.log(todo, ...todos);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoLists;
