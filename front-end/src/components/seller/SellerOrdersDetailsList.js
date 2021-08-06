import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOrdesBySellerApi } from '../../redux/actions';

const prefix1 = 'seller_order_details__element-order';
const prefix2 = 'seller_order_details__';

class SellerOrdersDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderDetails: {},
      orders: [],
      isLoading: true,
      isRequest: false,
      isDelivered: false,
    };
    this.setAllOrdesInState = this.setAllOrdesInState.bind(this);
  }

  async componentDidMount() {
    const NOT_MAGIC = -1;
    const { history, getAllOrdesByUser } = this.props;
    const orderId = Number(history.location.pathname.slice(NOT_MAGIC));
    await getAllOrdesByUser();
    this.setAllOrdesInState(orderId);
  }

  async setAllOrdesInState(orderId) {
    const { allOrdes } = this.props;
    const actualOrder = allOrdes.find((o) => o.id === orderId);
    if (actualOrder) {
      allOrdes.forEach((elem) => {
        const dateArray = elem.sale_date.split('T')[0].split('-');
        const date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
        elem.sale_date = date;
      });
      const selectedOrder = allOrdes.filter((elem) => elem.id === orderId);
      const orderCart = selectedOrder[0].productId;
      orderCart.forEach((elem) => {
        elem.quantity = elem.salesProducts.quantity;
      });
      console.log(orderCart);
      this.setState((state) => ({ ...state,
        OrderDetails: selectedOrder[0],
        isLoading: false,
        orderCart }));
    }
  }

  request() {
    this.setState({ isDelivered: true });
  }

  render() {
    const { history } = this.props;
    const { OrderDetails, isDelivered, isRequest, orderCart } = this.state;
    return (
      <div className="seller-orders_details-container">
        <table className="seller-orders_details-orders-info">
          <tr>
            <td
              data-testid={ `${prefix1}-details-label-order-id` }
            >
              { `Pedido ${OrderDetails.id}` }
            </td>
            <td
              data-testid={ `${prefix1}-details-label-order-date` }
            >
              { OrderDetails.sale_date }
            </td>
            <td
              data-testid={ `${prefix1}-details-label-delivery-status` }
              id={ OrderDetails.status }
            >
              { OrderDetails.status }
            </td>
            <td>
              <button
                disabled={ !isRequest }
                type="button"
                data-testid={ `${prefix2}button-preparing-check` }
                onClick={ () => this.request() }
              >
                PREPARAR PEDIDO
              </button>
            </td>
            <td>
              <button
                disabled={ !isDelivered }
                type="button"
                data-testid={ `${prefix2}button-dispatch-check` }
                onClick={ () => this.deliver() }
              >
                SAIU PARA ENTREGA
              </button>
            </td>
          </tr>
        </table>
        <table className="seller-orders_details-cart">
          <thead>
            <tr>
              <td>Item</td>
              <td>Descrição</td>
              <td>Quantidade</td>
              <td>Valor Unitário</td>
              <td>Sub-total</td>
            </tr>
          </thead>
          <tbody>
            { (orderCart && orderCart.length > 0)
            && orderCart.map((product, i) => (
              <tr key={ i }>
                <td
                  id="index-td"
                  data-testid={ `${prefix1}-table-item-number-${product.id}` }
                >
                  { product.id }
                </td>
                <td
                  id="name-td"
                  className="text-left"
                  data-testid={ `${prefix1}-table-name-${product.id}` }
                >
                  { product.name }
                </td>
                <td
                  id="quantity-td"
                  data-testid={ `${prefix1}-table-quantity-${product.id}` }
                >
                  { product.quantity }
                </td>
                <td
                  id="unitprice-td"
                  data-testid={ `${prefix1}-table-unit-price-${product.id}` }
                >
                  { `R$ ${product.price}` }
                </td>
                <td
                  id="totalprice-td"
                  data-testid={ `${prefix1}-table-sub-total-${product.id}` }
                >
                  { `R$ ${(product.price * product.quantity).toFixed(2)}` }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2
          className="seller-orders_details-totalprice bottom-info"
          data-testid={ `${prefix2}element-order-total-price` }
        >
          { `R$ ${(OrderDetails.total_price)
            ? OrderDetails.total_price.replace('.', ',') : 0}` }
        </h2>
        <button
          className="seller-orders_details-back bottom-info"
          type="button"
          onClick={ () => history.push('/seller/orders') }
        >
          Back
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // dispatchProducts: (array) => dispatch(productsAction(array)),
  // dispatchCart: (array) => dispatch(cartAction(array)),
  getAllOrdesByUser: () => dispatch(getAllOrdesBySellerApi()),
  // setAllUserStore: () => dispatch(getAllUsersApi()),
});

const mapStateToProps = (state) => ({
  allOrdes: state.ordesReducer.allOrdes,
});

// const mapStateToProps = (state) => ({
//   stateProducts: state.products.products,
//   stateCart: state.products.cart,
// });

SellerOrdersDetailsList.propTypes = {
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerOrdersDetailsList);
// export default SellerOrdersDetailsList;
