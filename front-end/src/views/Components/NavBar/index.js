import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  const { userType, userName } = props;
  const history = useHistory();
  return (
    <header>
      { userType === 'customer' && (
        <div className="flexLeft">
          <button
            type="button"
            onClick={ () => history.push('/customer/products') }
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </button>
          <button
            type="button"
            onClick={ () => history.push('/customer/orders') }
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus pedidos
          </button>
        </div>
      )}
      { userType === 'seller' && (
        <div className="flexLeft">
          <button
            type="button"
            onClick={ () => history.push('/seller/orders') }
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </button>
        </div>
      )}
      { userType === 'admin' && (
        <div className="flexLeft">
          <button
            type="button"
            href="/admin/manage"
            data-testid="customer_products__element-navbar-link-manage"
          >
            Gerenciar usuários
          </button>
        </div>
      )}
      <div className="flexRight">
        <p
          className="nav-name"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </p>
        <a
          type="button"
          href="/login"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </a>
      </div>
    </header>
  );
}

NavBar.propTypes = {
  userType: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default NavBar;
