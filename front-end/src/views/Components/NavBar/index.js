import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function NavBar(props) {
  const { userType, userName } = props;

  return (
    <header>
      <ul>
        { userType === 'client' && (
          <>
            <li>
              <a
                href="/customer_products"
                data-testid="navbar-customer-products"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="/customer_requests"
                data-testid="navbar-customer-requests"
              >
                Meus pedidos
              </a>
            </li>
          </>
        )}
        { userType === 'seller' && (
          <li>
            <a href="/seller_requests" data-testid="navbar-seller-requests">
              Pedidos
            </a>
          </li>
        )}
        { userType === 'admin' && (
          <li>
            <button type="button" data-testid="navbar-admin-users-manage">
              Gerenciar usuários
            </button>
          </li>
        )}
        <div className="flexRigth">

          <li className="nav-name" data-testid="navbar-user_name">{userName}</li>
          <li>
            <a
              href="/login"
              data-testid="navbar-logout"
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
