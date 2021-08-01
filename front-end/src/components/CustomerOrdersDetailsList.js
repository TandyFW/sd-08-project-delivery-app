import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { getAllOrdesByUserApi } from '../redux/actions';

import '../styles/customerOrderDetails.css';

// import { getOrdersForUserById } from '../services';
const prefix1 = 'customer_order_details__element-order';
const prefix2 = 'customer_order_details__';
// const newDate = new Date();
// const formatDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
// const OrderDetails = {
//   oderId: 1,
//   sellerName: 'prof xavier',
//   date: formatDate,
//   status: 'entregue',
//   totalPrice: 49.05,
//   purchasedProducts: [
//     { id: 11,
//       name: 'Skol Lata 250ml',
//       quantity: 3,
//       price: 2.2 },
//     { id: 22,
//       name: 'Heineken 600ml',
//       quantity: 4,
//       price: 7.5 },
//     { id: 33,
//       name: 'Antarctica Pilsen 300ml',
//       quantity: 5,
//       price: 2.49 },
//   ],
// };

class CustomerOrdersDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderDetails: {},
      orders: [],
      isLoading: true,
      isDelivered: false,
    };
    this.setAllOrdesInState = this.setAllOrdesInState.bind(this);
  }

  // const OrderDetails ={};
  async componentDidMount() {
    const NOT_MAGIC = -1;
    const { history, getAllOrdesByUser } = this.props;
    const orderId = history.location.pathname.slice(NOT_MAGIC);
    await getAllOrdesByUser();
    this.setAllOrdesInState(orderId);
  }

  setAllOrdesInState(orderId) {
    const { allOrdes } = this.props;
    orderId -= 1;
    console.log(orderId);
    console.log(allOrdes);
    if (allOrdes) {
      const { id, status, productId } = allOrdes[orderId];
      const OrderDetails = {
        oderId: id,
        sellerName: 'prof xavier',
        date: allOrdes[orderId].sale_date,
        status,
        totalPrice: allOrdes[orderId].total_price,
        purchasedProducts: productId,
      };
      console.log(OrderDetails);
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        OrderDetails,
        isLoading: false }));
    }
  }

  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    const { OrderDetails, isDelivered } = this.state;
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
            <td
              data-testid={ `${prefix1}-details-label-delivery-status` }
            >
              { (OrderDetails.status).toLocaleUpperCase() }
            </td>
            <td>
              <button
                disabled={ !isDelivered }
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
                  data-testid={ `${prefix1}-table-item-number-${product.id}` }
                >
                  { product.id }
                </td>
                <td
                  className="text-left"
                  data-testid={ `${prefix1}-table-name-${product.id}` }
                >
                  { product.name }
                </td>
                <td
                  data-testid={ `${prefix1}-table-quantity-${product.id}` }
                >
                  { product.salesProducts.quantity }
                </td>
                <td
                  data-testid={ `${prefix1}-table-unit-price-${product.id}` }
                >
                  { `R$ ${product.price}` }
                </td>
                <td
                  data-testid={ `${prefix1}-table-sub-total-${product.id}` }
                >
                  { `R$ ${(product.price * product.salesProducts.quantity).toFixed(2)}` }
                </td>
              </tr>
            ))
          }
        </table>
        <h2
          data-testid={ `${prefix2}element-order-total-price` }
        >
          { `Total: R$ ${OrderDetails.totalPrice}` }
        </h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatchProducts: (array) => dispatch(productsAction(array)),
  // dispatchCart: (array) => dispatch(cartAction(array)),
  getAllOrdesByUser: () => dispatch(getAllOrdesByUserApi()),
  // setAllUserStore: () => dispatch(getAllUsersApi()),
});

const mapStateToProps = (state) => ({
  allOrdes: state.ordesReducer.allOrdes,
});

// const mapStateToProps = (state) => ({
//   stateProducts: state.products.products,
//   stateCart: state.products.cart,
// });

CustomerOrdersDetailsList.propTypes = {
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersDetailsList);
// export default CustomerOrdersDetailsList;
