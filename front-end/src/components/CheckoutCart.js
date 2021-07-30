import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cartAction } from '../redux/actions';

class CheckoutCart extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    const { stateCart, dispatchCart } = this.props;
    const newCart = stateCart.filter((elem) => elem.id !== id);
    dispatchCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    let totalPrice = 0;
    newCart.forEach((element) => {
      totalPrice += Number((element.price * element.quantity).toFixed(2));
      console.log(totalPrice);
    });
    localStorage.setItem('totalPrice', totalPrice);
  }

  render() {
    const { stateCart } = this.props;
    const LSprice = localStorage.getItem('totalPrice');
    return (
      <div className="checkout-cart-container">
        <ul>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-total</td>
          <td>Remover Item</td>
          {(stateCart && stateCart.length > 0) && stateCart.map((elem, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { elem.name }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                { elem.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { elem.price.toString().replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { (elem.price * elem.quantity).toFixed(2).replace('.', ',') }
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => this.remove(elem.id) }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </ul>
        <div className="checkout-totalprice">
          Total:
          <span data-testid="customer_checkout__element-order-total-price">
            { LSprice.replace('.', ',')}
          </span>
        </div>
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

CheckoutCart.propTypes = {
  dispatchCart: PropTypes.func.isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart);
