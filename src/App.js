import { useEffect, useState } from "react";
import "./App.css";
import UsingCustomHookLogic from "./hooks/UsingCustomHookLogic";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UsingUseReducerLogic from "./hooks/UsingUseReducerLogic";
import { UseContectHook } from "./hooks/UseContectHook";
import { Context } from "./contexts/ThemeContext";
import HelloWorld from "./components/HelloWorld";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <Context.Provider value={"green"}>
      <div className="App">
        {/* <main>
        <UseStateHook />
        <UseEffectHook />
      </main>
      <hr />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
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
      <div>
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
      </div>
    </Context.Provider>
  );
}

export default App;
