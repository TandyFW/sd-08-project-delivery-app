import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { history: { location: { pathname } } } = this.props;
    if (pathname === '/customer/products') {
      document.querySelector('#products')
        .style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
    }
    if (pathname === '/customer/products') {
      document.querySelector('#products')
        .style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
    }
  }

  render() {
    const { history } = this.props;
    return (
      <header className="globalheader-container">
        <div className="left">
          <button
            type="button"
            id="products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </button>
          <button
            type="button"
            id="orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </button>
        </div>
        <div className="right">
          <button
            type="button"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Nome
          </button>
          <button
            type="button"
            onClick={ () => history.push('/') }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Header);
