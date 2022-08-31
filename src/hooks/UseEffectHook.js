import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //using useEffect to set document title
  useEffect(() => {
    document.title = `You clicked Me ${count} times`;
  }, [count]);

  return (
    <div>
      <div>
        <p>You clicked Me {count} times</p>
        <button
          type="button"
          onClick={() => setCount((preCount) => preCount + 1)}
        >
          Click Me
        </button>
      </div>
      {/* <ClassEffectHook /> */}
    </div>
  );
};

export default UseEffectHook;

class ClassEffectHook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //component lifecycle methods
  componentDidMount() {
    document.title = `You clicked Me ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked Me ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <p>You clicked Me {this.state.count} times</p>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Clicked Me
        </button>
      </div>
    );
  }
}

//useEffect is used in cases like
//Data Fetching
//When setting up a subscription
//When manually changing the DOM in React
//useEffect hook can be used many times in one component
