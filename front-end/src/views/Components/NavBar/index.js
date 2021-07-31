import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function NavBar(props) {
  const { userType, userName } = props;
  let prefix = '';

  if (userType === 'customer') {
    prefix = 'customer_products__';
  }

  if (userType === 'seller') {
    prefix = 'seller_orders__';
  }

  if (userType === 'admin') {
    prefix = 'admin_manage__';
  }

  return (
    <header>
      <ul>
        { userType === 'customer' && (
          <>
            <li>
              <a
                href="/customer/products"
                data-testid={ `${prefix}element-navbar-link-products` }
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="/customer/orders"
                data-testid={ `${prefix}element-navbar-link-orders` }
              >
                Meus pedidos
              </a>
            </li>
          </>
        )}
        { userType === 'seller' && (
          <li>
            <a
              href="/seller/requests"
              data-testid={ `${prefix}element-navbar-link-orders` }
            >
              Pedidos
            </a>
          </li>
        )}
        { userType === 'admin' && (
          <li>
            <a
              href="/admin/manage"
              data-testid={ `${prefix}element-navbar-link-manage` }
            >
              Gerenciar usuários
            </a>
          </li>
        )}
        <div className="flexRigth">

          <li
            className="nav-name"
            data-testid={ `${prefix}element-navbar-user-full-name` }
          >
            {userName}
          </li>
          <li>
            <a
              href="/login"
              data-testid={ `${prefix}element-navbar-link-logout` }
              onClick={ () => localStorage.clear() }
            >
              Sair
            </a>
          </li>
        </div>
      </ul>
    </header>
  );
}

NavBar.propTypes = {
  userType: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default NavBar;
