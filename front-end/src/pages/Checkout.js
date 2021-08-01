import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Loader, CheckoutCart, CheckoutAdress } from '../components';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    // verificar se o usuario está autenticado
    const Loading = 500;
    // const Loading = 1500;
    setTimeout(() => {
      this.setState({ loading: false });
    }, Loading);
  }

  render() {
    const { history } = this.props;
    const { loading } = this.state;
    return (
      <div className="checkout-container">
        <Header history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <div>
              Finalizar Pedido
              <CheckoutCart history={ history } />
              Detalhes e Endereço para Entrega
              <CheckoutAdress history={ history } />
            </div>
          )}
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Checkout);
