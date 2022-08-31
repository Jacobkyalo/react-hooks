import React, { useState } from "react";

const Quick = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  const increaseCounter = () => {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };
  //console.log(details);
  return (
    <div>
      <p>You clicked the page {details.counter} times</p>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default Quick;
