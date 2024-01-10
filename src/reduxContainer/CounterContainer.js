import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "./CountAction";

function CounterContainer() {
  const countValue = useSelector((state) => state.count);
  const dispatchActions = useDispatch();

  return (
    <div>
      <h2>CounterContainer</h2>
      <h4>Count: {countValue} </h4>
      <button onClick={() => dispatchActions(incrementCount())}>
        increment
      </button>
      <button onClick={() => dispatchActions(decrementCount())}>
        decrement
      </button>
    </div>
  );
}

export default CounterContainer;
