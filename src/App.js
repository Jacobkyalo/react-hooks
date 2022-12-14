import { useEffect, useRef, useState } from "react";
import "./App.css";
import UsingCustomHookLogic from "./hooks/UsingCustomHookLogic";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UsingUseReducerLogic from "./hooks/UsingUseReducerLogic";
import { UseContectHook } from "./hooks/UseContectHook";
import { Context } from "./contexts/ThemeContext";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import HelloWorld from "./components/HelloWorld";
import ConsumingDefaultContextValue from "./components/ConsumingDefaultContextValue";
import ReducerExample from "./components/ReducerExample";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";
import Quick from "./components/Quick";
import CleanUp from "./components/CleanUp";
import UseLayoutEffectHooDemo from "./hooks/UseLayoutEffectHooDemo";
import UseCallBackHookDemo from "./hooks/UseCallBackHookDemo";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [theme, setTheme] = useState(themes.light);

  const inputRef = useRef(null);
  useEffect(() => {
    const fetchHits = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${search}`
        );
        const jsondata = await res.json();
        setData({ hits: jsondata.hits });
        //console.log(jsondata);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchHits();
  }, [search]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <ConsumingDefaultContextValue />
        <Context.Provider value={"green"}>
          <div
            className="App"
            style={{
              backgroundColor: theme
                ? themes.light.background
                : themes.dark.background,
              color: theme ? themes.light.textcolor : themes.dark.textcolor,
            }}
          >
            <main>
              <UseStateHook />
              <UseEffectHook />
            </main>
            <hr />
            <input type="text" ref={inputRef} />
            <button
              type="button"
              onClick={() => setSearch(inputRef.current.value)}
            >
              Search
            </button>
            {error && <h2>Something went wrong, Refresh...</h2>}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {data.hits && (
                  <ul>
                    {data.hits.map((item) => (
                      <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
            <hr />
            {/* <div>
              <UsingCustomHookLogic />
            </div>
            <hr />
            <div>
              <UsingUseReducerLogic />
            </div> */}
            <div>
              <UseContectHook />
              <HelloWorld />
            </div>
            <p>Checking whether ThemeContext is working</p>
            <button onClick={() => setTheme(!theme)}>Change Theme</button>
          </div>
          <>
            <ReducerExample />
            <UseMemo />
            <UseRef />
            <Quick />
            <CleanUp />
            <UseLayoutEffectHooDemo />
            <UseCallBackHookDemo />
          </>
        </Context.Provider>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
