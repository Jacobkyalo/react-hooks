import React, { useState } from "react";
import useReducerHook from "./useReducerHook";

const UsingUseReducerLogic = () => {
  const [input, setInput] = useState("");
  const [state, setUrl] = useReducerHook(
    [],
    `https://hn.algolia.com/api/v1/search?query=vue`
  );
  return (
    <div>
      {state.error && <h2>Something went wrong...</h2>}
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {state.data.map((item) => (
            <div key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </div>
          ))}
        </>
      )}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${input}`)
          }
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default UsingUseReducerLogic;
