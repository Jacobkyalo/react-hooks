import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHooDemo = () => {
  const textRef = useRef();
  //first use useEffect
  // useEffect(() => {
  //   const dimension = textRef.current.getBoundingClientRect();
  //   textRef.current.style.paddingTop = `${dimension.height}px`;
  //   console.log(dimension);
  // });
  //using useLayoutEffect
  useLayoutEffect(() => {
    const dimension = textRef.current.getBoundingClientRect();
    textRef.current.style.paddingTop = `${dimension.height}px`;
    //console.log(dimension);
  });
  return (
    <div>
      <h1 ref={textRef}>Testing useLayoutEffect hook</h1>
    </div>
  );
};

export default UseLayoutEffectHooDemo;
