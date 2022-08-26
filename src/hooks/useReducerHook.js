import { useState, useEffect, useReducer } from "react";

const reducerDataFetch = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      throw new Error();
  }
};

const useReducerHook = (initialData, initialUrl) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(reducerDataFetch, {
    data: initialData,
    loading: false,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await fetch(url);
        const responsedata = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: responsedata.hits });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
};

export default useReducerHook;
