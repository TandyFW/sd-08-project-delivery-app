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
    const products = document.querySelector('#products');
    if (pathname === '/customer/products') {
      products.style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
      products.style.backgroundColor = '#0f9562';
    }
    if (pathname === '/customer/products') {
      document.querySelector('#products')
        .style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
    }
  }

  render() {
    const { history, stateUser } = this.props;
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
            { stateUser ? stateUser.name
              : (`${JSON.parse(localStorage.getItem('token')).name}`)}
          </button>
          <button
            type="button"
            onClick={ () => {
              localStorage.setItem('user', '');
              history.push('/login');
            } }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  stateUser: state.user.user,
});

Header.propTypes = {
  history: PropTypes.shape().isRequired,
  stateUser: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
