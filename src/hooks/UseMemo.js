import React, { useMemo } from "react";

const UseMemo = () => {
  const compute = () => {
    console.log(Math.floor(Math.random() * 1000 + 1) * 1000000065676);
  };
  const memo = useMemo(() => compute, []);
  return (
    <div>
      <>
        <button onClick={memo}>Compute</button>
      </>
    </div>
  );
};

export default UseMemo;
