import { useState } from "react";
import "./App.css";
import { data } from "./components/Data";
import Commentsapp  from "./components/commentsApp";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Commentsapp data={data} />
    </div>
  );
}

export default App;
