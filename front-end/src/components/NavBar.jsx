import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = ({ screens, user }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: 'auto',
      paddingRight: 30,
    },
  }));

  const classes = useStyles();

  console.log(screens);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          { screens.map(({ name, testId }) => {
            console.log(name);
            return (
              <Button
                key={ name }
                data-testid={ `customer_products__element-navbar-link-${testId}` }
                className={ classes.menuButton }
                color="inherit"
              >
                { name }
              </Button>
            );
          }) }
          <Typography
            variant="h5"
            className={ classes.title }
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user}
          </Typography>
          <Button
            color="inherit"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  screens: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

export default NavBar;
