import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getByRole, createSaler } from '../services';

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

  async makeCheckout({ target }) {
    const { history } = this.props;
    const totalPrice = localStorage.getItem('totalPrice').replace('.', ',');
    const deliveryAddress = target.parentNode.firstChild
      .childNodes[1].childNodes[1].value;
    const deliveryNumber = target.parentNode.firstChild.childNodes[2].childNodes[1].value;
    const sellerId = target.parentNode.firstChild.childNodes[0].childNodes[1].value;
    const { stateCart } = this.props;
    const data = { deliveryAddress,
      deliveryNumber,
      totalPrice,
      sellerId };
    const result = await createSaler(data, stateCart);
    const { id } = result.newOrder;
    console.log(result);
    history.push(`/customer/orders/${id}`);
  }

  render() {
    const { state } = this;
    const { props } = this;
    console.log(props.history);
    // console.log(state.sellers);
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
                  <option key={ index } value={ elem.id }>
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
          onClick={ (event) => { this.makeCheckout(event); } }
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
  // dispatchCart: PropTypes.func.isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutAdress);
