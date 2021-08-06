import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getByRole, createSaler } from '../../../services';

class CheckoutAdress extends React.Component {
  constructor() {
    super();
    this.state = {
      sellers: {},
    };
    this.sendOrder = this.sendOrder.bind(this);
  }

  componentDidMount() {
    this.getSellers();
  }

  async getSellers() {
    const sellers = await getByRole('seller');
    this.setState({ sellers });
  }

  async sendOrder() {
    const { history } = this.props;
    const sellerId = document.getElementById('seller').value;
    const totalPrice = parseFloat(localStorage.getItem('totalPrice')).toFixed(2);
    const deliveryAddress = document.getElementById('adress').value;
    const deliveryNumber = document.getElementById('number').value;
    const { stateCart } = this.props;
    const data = { sellerId, totalPrice, deliveryAddress, deliveryNumber };
    const result = await createSaler(data, stateCart);
    if (result) {
      const { id } = result.newOrder;
      localStorage.removeItem('totalPrice');
      localStorage.removeItem('cart');
      history.push(`/customer/orders/${id}`);
    }
  }

  render() {
    const { state } = this;
    return (
      <div className="checkout-adress-container">
        <div className="checkout-adress-selectdiv">
          <label htmlFor="seller">
            <span>P.Vendedora Responsável</span>
            <select
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              {(state.sellers && state.sellers.length > 0)
                && state.sellers.map((elem, index) => (
                  <option key={ index } value={ elem.id }>
                    { elem.name }
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="adress">
            <span>Endereço</span>
            <input
              id="adress"
              data-testid="customer_checkout__input-address"
            />
          </label>
          <label htmlFor="number">
            <span>Numero</span>
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
          onClick={ this.sendOrder }
        >
          Finalizar Pedido
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateCart: state.productReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCart: (array) => dispatch(cartAction(array)),
});

CheckoutAdress.propTypes = {
  history: PropTypes.shape().isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutAdress);
