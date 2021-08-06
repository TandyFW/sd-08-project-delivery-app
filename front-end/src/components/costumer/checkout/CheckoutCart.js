import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cartAction } from '../../../redux/actions';

class CheckoutCart extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    const { dispatchCart } = this.props;
    if (localStorage.cart) {
      const LScart = JSON.parse(localStorage.getItem('cart'));
      dispatchCart(LScart);
    }
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
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {(stateCart && stateCart.length > 0) && stateCart.map((elem, index) => (
              <tr key={ index }>
                <td
                  id="index-td"
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  id="name-td"
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { elem.name }
                </td>
                <td
                  id="quantity-td"
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { elem.quantity }
                </td>
                <td
                  id="unitprice-td"
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { elem.price.toString().replace('.', ',') }
                </td>
                <td
                  id="totalprice-td"
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { (elem.price * elem.quantity).toFixed(2).replace('.', ',') }
                </td>
                <td>
                  <button
                    id="button-td"
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
          </tbody>
        </table>
        <div>
          <div className="checkout-totalprice">
            <span data-testid="customer_checkout__element-order-total-price">
              { `R$ ${LSprice.replace('.', ',')}`}
            </span>
          </div>
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
