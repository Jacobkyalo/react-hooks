import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={styles}>
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.valueAsNumber)}
        />
        <h2>Calculation {calculation}</h2>
        <button onClick={() => setDark(!dark)}>Toggle</button>
      </>
    </div>
  );
};
export default UseMemo;

const expensiveFunction = (num) => {
  //console.log("Loop started");
  for (let i = 0; i < 1000000000; i++) {}
  return num;
};
