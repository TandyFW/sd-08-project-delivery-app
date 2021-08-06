import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Loader, CheckoutCart, CheckoutAdress } from '../../components';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    // verificar se o usuario está autenticado
    const Loading = 1000;
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
              <h4>Finalizar Pedido</h4>
              <CheckoutCart history={ history } />
              <h4>Detalhes e Endereço para Entrega</h4>
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
