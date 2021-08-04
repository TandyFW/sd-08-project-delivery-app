import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { getNameUserById } from '../services';
import { getAllOrdesByUserApi } from '../redux/actions';

const prefix1 = 'customer_order_details__element-order';
const prefix2 = 'customer_order_details__';

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

  async setAllOrdesInState(orderId) {
    const { allOrdes } = this.props;
    orderId -= 1;
    if (allOrdes) {
      const { id, status, productId } = allOrdes[orderId];
      const sellerName = await getNameUserById(allOrdes[orderId].seller_id);
      const dateArray = allOrdes[orderId].sale_date.split('T')[0].split('-');
      const date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
      const OrderDetails = {
        oderId: id,
        sellerName,
        date,
        status,
        totalPrice: allOrdes[orderId].total_price,
        purchasedProducts: productId,
      };
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        OrderDetails,
        isLoading: false }));
    }
  }

  render() {
    const { history } = this.props;
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    const { OrderDetails, isDelivered } = this.state;
    return (
      <div className="cust-orders_details-container">
        <table className="cust-orders_details-orders-info">
          <tr>
            <td
              id="cust-orders_details-id"
              data-testid={ `${prefix1}-details-label-order-id` }
            >
              { `Pedido ${OrderDetails.oderId}` }
            </td>
            <td
              id="cust-orders_details-name"
              data-testid={ `${prefix1}-details-label-seller-name` }
            >
              { `P. Vend: ${OrderDetails.sellerName}` }
            </td>
            <td
              data-testid={ `${prefix1}-details-label-order-date` }
              id="cust-orders_details-date"
            >
              { OrderDetails.date }
            </td>
            <td
              id={ `${OrderDetails.status}` }
              data-testid={ `${prefix1}-details-label-delivery-status` }
            >
              { (OrderDetails.status) }
            </td>
            <td>
              <button
                disabled={ !isDelivered }
                type="button"
                data-testid={ `${prefix2}button-delivery-check` }
              >
                Marcar como Entregue
              </button>
            </td>
          </tr>
        </table>
        <table className="cust-orders_details-cart">
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
            {
              OrderDetails.purchasedProducts.map((product, i) => (
                <tr key={ i }>
                  <td
                    id="index-td"
                    data-testid={
                      `${prefix1}-table-item-number-${product.id}`
                    }
                  >
                    { i + 1 }
                  </td>
                  <td
                    id="name-td"
                    data-testid={ `${prefix1}-table-name-${product.id}` }
                  >
                    { product.name }
                  </td>
                  <td
                    id="quantity-td"
                    data-testid={ `${prefix1}-table-quantity-${product.id}` }
                  >
                    { product.salesProducts.quantity }
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
                    {`R$ ${(product.price * product.salesProducts.quantity)
                      .toFixed(2)}` }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h2
          className="cust-orders_details-totalprice bottom_info"
          data-testid={ `${prefix2}element-order-total-price` }
        >
          { `R$ ${OrderDetails.totalPrice.replace('.', ',')}` }
        </h2>
        <button
          type="button"
          className="cust-orders_details-back bottom_info"
          onClick={ () => history.push('/customer/orders') }
        >
          Back
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllOrdesByUser: () => dispatch(getAllOrdesByUserApi()),
});

const mapStateToProps = (state) => ({
  allOrdes: state.ordesReducer.allOrdes,
});

CustomerOrdersDetailsList.propTypes = {
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersDetailsList);
