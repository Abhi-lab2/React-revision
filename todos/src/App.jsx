import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="todo-app">
      <h1> Todo App</h1>
      <TodoLists />
    </div>
  );
}

export default App;
