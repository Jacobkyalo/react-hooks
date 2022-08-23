import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You Clicked {count} {count == 1 ? "time" : "times"}.
      </p>
      <button
        type="button"
        onClick={() => setCount((preCount) => preCount + 1)}
      >
        Click Me
      </button>
    </div>
  );
};

export default UseStateHook;
