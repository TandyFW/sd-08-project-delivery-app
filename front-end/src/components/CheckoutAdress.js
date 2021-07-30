import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CheckoutAdress extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div className="checkout-adress-container">
        <div className="checkout-adress-selectdiv">
          <label htmlFor="seller">
            P.Vendedora Responsável
            <select
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              <option>bla</option>
              <option>blalda</option>
              <option>blaldo</option>
            </select>
          </label>
          <label htmlFor="adress">
            Endereço
            <input
              id="adress"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            Numero
            <input
              id="number"
              type="number"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </div>
    );
  }
}

CheckoutAdress.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(CheckoutAdress);
