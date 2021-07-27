import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { LoginForm } from '../components';

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
    <Grid container justifyContent="center" alignItems="flex-end">
      <h1>{ JSON.stringify(user, null, 2) }</h1>
      <LoginForm />
    </Grid>
  );
};

export default Login;
