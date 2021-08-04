import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LoadingSvg from './LoadingSvg';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid container className={ classes.root }>
      <LoadingSvg />
    </Grid>
  );
};

export default Loading;
