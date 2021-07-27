import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { LoginForm } from '../components';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <LoginForm />
    </Grid>
  );
};

export default Login;
