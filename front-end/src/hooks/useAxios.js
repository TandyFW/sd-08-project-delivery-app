import axios from 'axios';
import React from 'react';

const useAxios = () => {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async ({ method, url, ...rest }) => {
    const options = {
      method, url, ...rest,
    };
    setLoading(true);
    setResponse(null);
    setError(null);
    try {
      const result = await axios(options);
      setResponse(result);
      setLoading(false);
    } catch (err) {
      setError(err.request.response);
      setLoading(false);
    }
  }, []);
  return {
    request,
    response,
    loading,
    error,
  };
};

export default useAxios;
