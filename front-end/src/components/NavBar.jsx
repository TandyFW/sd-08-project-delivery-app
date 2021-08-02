import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { lStorage } from '../utils';

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

const NavBar = ({ userType, userName }) => {
  const history = useHistory();

  const classes = useStyles();

  const createScreenData = (name, testId, path) => ({ name, testId, path });

  const chooseScreens = () => {
    switch (userType) {
    case 'customer':
      return [
        createScreenData('Produtos', 'products', '/customer/products'),
        createScreenData('Meus Pedidos', 'orders', '/customer/orders'),
      ];
    case 'seller':
      return [createScreenData('Pedidos', '', '/seller/orders')];
    case 'administrator':
      return [createScreenData('Gerenciar Usuários', '', '/admin/manage')];
    default:
      return null;
    }
  };

  const logoutUser = () => {
    lStorage().user.remove();
    lStorage().cart.remove();
    history.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        { chooseScreens().map(({ name, testId, path }) => (
          <Button
            key={ name }
            data-testid={ `customer_products__element-navbar-link-${testId}` }
            className={ classes.menuButton }
            color="inherit"
            onClick={ () => history.push(path) }
          >
            { name }
          </Button>
        )) }
        <Typography
          variant="h5"
          className={ classes.title }
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </Typography>
        <Button
          color="inherit"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logoutUser }
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  userType: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default NavBar;
