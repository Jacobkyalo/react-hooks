import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const focus = () => {
    inputRef.current.focus();
  };

  //focus input on page load
  // useEffect(() => {
  //   inputRef.current.focus();
  //   console.log(inputRef);
  // });

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus the Input</button>
    </div>
  );
};

export default UseRef;
