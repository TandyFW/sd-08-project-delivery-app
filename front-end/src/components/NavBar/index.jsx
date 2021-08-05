import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

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
  const currentPathName = location.pathname.split('/')[1];
  const headerButtons = navButtonsData[currentPathName];
  const classes = useStyles();

  // const pageRole = location.pathname.split('/')[1];
  // const localStorageName = async () => {
  //   const user = await localStorage.getItem('user');
  //   return user ? JSON.parse(user).name : '';
  // };
  // const [user, setUser] = useState('');
  // console.log(pageRole);

  const clearLocalStorage = async () => {
    await localStorage.removeItem('user');
    history.push('/login');
  };

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('user') || ''));
  // }, []);

  return (
    <div>
      {/* {(pageRole !== userRole()) && <Redirect to="/login" />} */}
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
            {
              localStorage.getItem('user')
              && JSON.parse(localStorage.getItem('user')).name
            }
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
