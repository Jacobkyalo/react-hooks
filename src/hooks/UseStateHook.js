import React, { useState, Component } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState({ myAge: 20 });

  return (
    <div>
      <p>
        You Clicked {count} {count === 1 ? "time" : "times"}.
      </p>
      <button
        type="button"
        onClick={() => setCount((preCount) => preCount + 1)}
      >
        Click Me
      </button>
      <div>
        <p>My age is {age.myAge}</p>
        <button type="button" onClick={() => setAge({ myAge: age.myAge + 10 })}>
          Change Age
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;

//state in class based components

class ClassStateHook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>
          You clicked
          {this.state.count} times
        </p>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click Me
        </button>
      </div>
    );
  }
}
