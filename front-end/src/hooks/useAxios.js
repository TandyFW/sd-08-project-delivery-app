import axios from 'axios';
import React from 'react';

const useAxios = () => {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState(null);

  const request = React.useCallback(async ({ method, url, ...rest }) => {
    const options = {
      method, url, ...rest,
    };
    setLoading(true);
    setResponse(null);
    setLoginError(null);
    try {
      const result = await axios(options);
      setResponse(result);
      setLoading(false);
    } catch (err) {
      setLoginError(err.request.response);
      setLoading(false);
    }
  }, []);
  return {
    request,
    response,
    loading,
    loginError,
  };
};

export default useAxios;
