import React, { useState, useEffect, useContext } from 'react';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { lStorage, request } from '../../utils';
import { MyTableHead, MyTableBody } from '.';
import { Context } from '../../context';
// import PropTypes from 'prop-types';
// import OrderCard from './OrderCard';

const useStyles = makeStyles(() => ({
  root: {
    padding: '6px',
  },
}));

const UserTable = () => {
  const { oscillator } = useContext(Context);
  console.log(oscillator);
  const classes = useStyles();
  const [users, setUser] = useState(null);

  const savedUser = lStorage().user.get();
  const { token } = savedUser;

  useEffect(() => {
    const getUsers = async () => {
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const userRequest = await request('users/all', options);
      setUser(userRequest);
    };
    getUsers();
  }, [oscillator.value]);

  console.log(users);
  console.log(token);

  const removeUser = (id) => {
    const options = {
      headers: {
        Authorization: token,
      },
      method: 'DELETE',
    };
    oscillator.set(!oscillator.value);
    return request(`users/${id}`, options);
  };

  const renderBody = () => {
    if (users) {
      return (
        <MyTableBody users={ users } removeUser={ removeUser } />);
    }
  };

  return (
    <Grid container className={ classes.root }>
      <Table>
        <MyTableHead />
        {renderBody()}
      </Table>
    </Grid>
  );
};

export default UserTable;
