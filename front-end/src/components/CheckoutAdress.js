import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getByRole } from '../services';

class CheckoutAdress extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getSellers();
  }

  async getSellers() {
    const sellers = await getByRole('seller');
    this.setState({ sellers });
  }

  render() {
    const { state } = this;
    const { props } = this;
    console.log(props.history);
    console.log(state.sellers);
    return (
      <div className="checkout-adress-container">
        <div className="checkout-adress-selectdiv">
          <label htmlFor="seller">
            P.Vendedora Responsável
            <select
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              {(state.sellers && state.sellers.length > 0)
                && state.sellers.map((elem, index) => (
                  <option key={ index }>
                    { elem.name }
                  </option>
                ))}
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
          // onClick={ () => history.push(`/customer/orders/${}`)}
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
