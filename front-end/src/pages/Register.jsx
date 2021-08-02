import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Register } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    height: '100vh',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}));

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <Register />
    </Grid>
  );
};

export default RegisterPage;
