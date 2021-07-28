import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const OrderDetailsHeader = ({ info }) => {
  const { number, date, userType, socket } = info;
  return (
    <Paper elevation={ 8 }>
      <Grid container>
        
      </Grid>
    </Paper>
  );
};

export default OrderDetailsHeader;
