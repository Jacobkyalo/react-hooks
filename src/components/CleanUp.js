import React, { useEffect, useState } from "react";
import LoginContext from "../contexts/LoginContext";
import ConsumeLoginContext from "./ConsumeLoginContext";

const CleanUp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("The counter is", counter);
    //clean up function
    return () => {
      console.log("Cleaned up", counter);
    };
  }, [counter]);

  return (
    <LoginContext>
      <div>
        <h3>Count: {counter}</h3>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
        <ConsumeLoginContext />
      </div>
    </LoginContext>
  );
};

export default CleanUp;
