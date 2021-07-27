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
          >
            Produtos
          </button>
          <button
            type="button"
            id="orders"
          >
            Meus Pedidos
          </button>
        </div>
        <div className="right">
          <button type="button">Nome</button>
          <button type="button" onClick={ () => history.push('/') }>Sair</button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Header);
