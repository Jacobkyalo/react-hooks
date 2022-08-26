import React, { useState } from "react";
import useCustomHook from "./useCustomHook";

const UsingCustomHookLogic = () => {
  const [searchInput, setSearchInput] = useState("");
  const { data, loading, error, setUrl } = useCustomHook(
    [],
    `https://hn.algolia.com/api/v1/search?query=html`
  );
  return (
    <div>
      {error && <h3>404 Not Found</h3>}
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          {data && (
            <div>
              {data.map((item) => (
                <div key={item.objectID}>
                  <a href={item.url}>{item.title}</a>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <hr />
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://hn.algolia.com/api/v1/search?query=${searchInput}`)
        }
      >
        CHANGE OUTPUT
      </button>
    </div>
  );
};

export default UsingCustomHookLogic;
