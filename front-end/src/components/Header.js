import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const productsRoute = '/customer/products';
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const {
      history: {
        location: { pathname },
      },
    } = this.props;
    const products = document.querySelector('#products');
    if (pathname === productsRoute) {
      products.style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
      products.style.backgroundColor = '#0f9562';
    }
    if (pathname === productsRoute) {
      document
        .querySelector('#products').style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
    }
  }

  render() {
    const { history, dataLogin } = this.props;
    return (
      <header className="globalheader-container">
        <div className="left">
          <button
            type="button"
            id="products"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => {
              history.push(productsRoute);
            } }
          >
            Produtos
          </button>
          <button
            type="button"
            id="orders"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => {
              history.push('/customer/orders');
            } }
          >
            Meus Pedidos
          </button>
        </div>
        <div className="right">
          <button
            type="button"
            data-testid="customer_products__element-navbar-user-full-name"
            id="username"
            onClick={ () => {
              history.push(productsRoute);
            } }
          >
            {(dataLogin || `${JSON.parse(localStorage.getItem('user')).name}`)
              ? `${JSON.parse(localStorage.getItem('user')).name}`
              : dataLogin.name}
          </button>
          <button
            type="button"
            id="logout"
            onClick={ () => {
              localStorage.clear();
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
  dataLogin: state.userReducer.user,
});

Header.propTypes = {
  history: PropTypes.shape().isRequired,
  dataLogin: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
