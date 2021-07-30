import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllProducts } from '../services';
// import { cartAction, productsAction } from '../redux/actions';

import '../styles/customerOrderDetails.css';

const prefix1 = 'customer_order_details__element-order';
const prefix2 = 'customer_order_details__';
const newDate = new Date();
const formatDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
const OrderDetails = {
  oderId: 1,
  sellerName: 'prof xavier',
  date: formatDate,
  status: 'entregue',
  totalPrice: 49.05,
  purchasedProducts: [
    { productId: 11,
      name: 'Skol Lata 250ml',
      quantity: 3,
      price: 2.2 },
    { productId: 22,
      name: 'Heineken 600ml',
      quantity: 4,
      price: 7.5 },
    { productId: 33,
      name: 'Antarctica Pilsen 300ml',
      quantity: 5,
      price: 2.49 },
  ],
};

class CustomerOrdersDetailsList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // async componentDidMount() {
  //   const { dispatchProducts, dispatchCart } = this.props;
  //   const products = await getAllProducts();
  // }

  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    // const { state } = this;
    return (
      <div className="customerOrdersDetailsList-div">
        <table className="customerOrdersDetailsList-table">
          <tr>
            <td
              data-testid={ `${prefix1}-details-label-order-id` }
            >
              { `Pedido ${OrderDetails.oderId}` }
            </td>
            <td
              data-testid={ `${prefix1}-details-label-seller-name` }
            >
              { `P. Vend: ${OrderDetails.sellerName}` }
            </td>
            <td
              data-testid={ `${prefix1}-details-label-order-date` }
            >
              { OrderDetails.date }
            </td>
            <td>
              { (OrderDetails.status).toLocaleUpperCase() }
            </td>
            <td>
              <button
                type="button"
                data-testid={ `${prefix2}button-delivery-check` }
              >
                MARCAR COMO ENTREGUE
              </button>
            </td>
          </tr>
        </table>
        <table className="text-center product-table">
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
          </tr>
          {
            OrderDetails.purchasedProducts.map((product, i) => (
              <tr key={ i }>
                <td
                  data-testid={ `${prefix1}-table-item-number-${product.productId}` }
                >
                  { product.productId }
                </td>
                <td
                  className="text-left"
                  data-testid={ `${prefix1}-table-name-${product.productId}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={ `${prefix1}-table-quantity-${product.productId}` }
                >
                  { product.quantity }
                </td>
                <td
                  data-testid={ `${prefix1}-table-unit-price-${product.productId}` }
                >
                  { `R$ ${product.price}` }
                </td>
                <td
                  data-testid={ `${prefix1}-table-sub-total-${product.productId}` }
                >
                  { `R$ ${(product.price * product.quantity).toFixed(2)}` }
                </td>
              </tr>
            ))
          }
        </table>
        <h2>
          { `Total: R$ ${OrderDetails.totalPrice}` }
        </h2>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   dispatchProducts: (array) => dispatch(productsAction(array)),
//   dispatchCart: (array) => dispatch(cartAction(array)),
// });

// const mapStateToProps = (state) => ({
//   stateProducts: state.products.products,
//   stateCart: state.products.cart,
// });

// CustomerOrdersDetailsList.propTypes = {
//   // history: PropTypes.shape().isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersDetailsList);
export default CustomerOrdersDetailsList;
