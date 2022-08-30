import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        value: state.value + 1,
      };
    case "decrement":
      return {
        value: state.value - 1,
      };
    default:
      throw new Error();
  }
};
const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
  });
  return (
    <div>
      {state.value}
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
};

export default ReducerExample;
