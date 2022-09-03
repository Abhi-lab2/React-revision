import { addCount } from "../Redux/Counter/action";
import { store } from "../Redux/store";

import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);
  console.log("rendering counter");
  return (
    <div>
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        add 1
      </button>
    </div>
  );
};
