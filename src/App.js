import "./App.css";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";

function App() {
  return (
    <div className="App">
      <main>
        <UseStateHook />
        <UseEffectHook />
      </main>
    </div>
  );
}

export default App;
