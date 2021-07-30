import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Components from '../components';

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

const Register = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <Components.Register />
    </Grid>
  );
};

export default Register;
