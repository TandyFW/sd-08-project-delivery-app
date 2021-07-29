import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import navButtonsData from './navBarButtonsData';

const useStyles = makeStyles((theme) => (
  {

    root: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },

  }));

function NavBar() {
  const history = useHistory();
  const location = useLocation();
  const currentPathName = location.pathname;
  const headerButtons = navButtonsData[currentPathName];
  const classes = useStyles();
  const { username } = useContext(Context);

  const clearLocalStorage = async () => {
    await localStorage.removeItem('user');
    history.push('/login');
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            // textColor="primary"
            value={ location.pathname }
          >
            {headerButtons.map(({ label, href, testId = '' }) => (
              <Tab
                label={ label }
                href={ href }
                key={ label }
                value={ href }
                data-testid={ testId }
              />
            ))}
          </Tabs>
          <Typography
            className={ classes.root }
            align="right"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {username.value || 'Anonymous'}
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ async () => { await clearLocalStorage(); } }
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
