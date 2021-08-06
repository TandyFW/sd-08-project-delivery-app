import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const productsRoute = '/customer/products';
const ordersRoute = '/customer/orders';
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
    const orders = document.querySelector('#orders');
    if (pathname === ordersRoute) {
      orders.style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
      orders.style.backgroundColor = '#0f9562';
      products.style.backgroundColor = '#0fa36b';
      products.style.boxShadow = '0 0 0';
    } else {
      products.style.boxShadow = 'inset 0 -17px 0px -14px #FFFFFF';
      products.style.backgroundColor = '#0f9562';
      orders.style.backgroundColor = '#0fa36b';
      orders.style.boxShadow = '0 0 0';
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
            onClick={ () => {
              history.push(productsRoute);
            } }
          >
            {(dataLogin || JSON.parse(localStorage.getItem('user')))
              ? `${JSON.parse(localStorage.getItem('user')).name}`
              : dataLogin.name}
          </button>
          <button
            type="button"
            onClick={ () => {
              localStorage.clear();
              history.push('/login');
            } }
            id="logoff"
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
  dataLogin: state.userReducer.dataLogin,
});

Header.propTypes = {
  history: PropTypes.shape().isRequired,
  dataLogin: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
