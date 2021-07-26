import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router';

// Model of prop to receive:

// const headerButtons = [
//   {
//     label: 'PRODUTOS',
//     href: '/products',
//   },
//   {
//     label: 'MEUS PEDIDOS',
//     href: '/orders',
//   },
// ];

//---------------------------

const useStyles = makeStyles((theme) => (
  {

    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },

  }));
function NavBar(props) {
  const { headerButtons } = props;
  const location = useLocation();
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            // textColor="primary"
            value={ location.pathname }
          >
            {headerButtons.map(({ label, href }) => (
              <Tab label={ label } href={ href } key={ label } value={ href } />
            ))}
          </Tabs>
          <Typography className={ classes.root } align="right">User</Typography>
          <Button size="large" variant="contained" color="secondary">Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  headerButtons: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default NavBar;
