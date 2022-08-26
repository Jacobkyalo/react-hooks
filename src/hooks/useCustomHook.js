import { useState, useEffect } from "react";

const useCustomHook = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  //const url = "https://hn.algolia.com/api/v1/search?query=html";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await fetch(url);
        const datafetched = await res.json();
        setData(datafetched.hits);
        //console.log(datafetched);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getData();
  }, [url]);

  return { data, loading, error, setUrl };
};

export default useCustomHook;
