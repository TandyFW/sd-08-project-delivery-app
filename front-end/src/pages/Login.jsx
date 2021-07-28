import React, { useEffect, useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const resp = await fetch('http://localhost:3001/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ email: 'adm@deliveryapp' }),
      });
      const userObj = await resp.json();
      console.log(userObj);
      setUser(userObj);
    };

    getUser();
  }, []);

  return (
    <h1>{ JSON.stringify(user, null, 2) }</h1>
  );
};

export default Login;
