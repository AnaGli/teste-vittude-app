import React from "react";
const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { error, loading, request };
};
export default useFetch;
