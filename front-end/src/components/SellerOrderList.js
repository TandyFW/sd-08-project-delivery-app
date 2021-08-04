import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
// import { getAllProducts } from '../services';
// import { productsAction } from '../redux/actions';
import { getAllOrdesBySellerApi } from '../redux/actions';

// import '../styles/sellerOrderList.css';

// const data = new Date();
// const formatedDate = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

const testId = 'seller_orders__element';

class SellerOrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderDetails: {},
      orders: [],
      isLoading: true,
    };
    this.setAllOrdesInState = this.setAllOrdesInState.bind(this);
  }

  async componentDidMount() {
    // const NOT_MAGIC = -1;
    const { getAllOrdesByUser } = this.props;
    // const orderId = history.location.pathname.slice(NOT_MAGIC);
    await getAllOrdesByUser();
    this.setAllOrdesInState();
  }

  async setAllOrdesInState() {
    const { allOrdes } = this.props;
    console.log(allOrdes);
    // orderId -= 1;
    // console.log(orderId);
    // console.log(allOrdes);
    if (allOrdes) {
      allOrdes.forEach((ordes) => {
        const dateArray = ordes.sale_date.split('T')[0].split('-');
        ordes.date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
        // console.log(ordes.date);
        // const dateISO = Date.parse(ordes.sale_date);
        // console.log(dateISO);
        // console.log(dateISO.getDay());
        // ordes.date = `${dateISO.getDay()}/${dateISO.getMonth()}/${dateISO.getYear()}`;
      });
      // const { id, status } = allOrdes[orderId];
      // const sellerName = await getNameUserById(allOrdes[orderId].user_id);
      // console.log(typeof allOrdes[orderId].user_id);
      // console.log(sellerName);
      // const OrderDetails = {
      //   id,
      //   sellerName,
      //   date,
      //   status,
      //   price: allOrdes[orderId].total_price,
      //   address: 'rua i',
      // };
      // console.log(OrderDetails);
      // console.log(allOrdes[0].sale_date);
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        // OrderDetails,
        isLoading: false }));
    }
  }

  render() {
    const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    const { isLoading } = this.state;
    const { orders } = this.state;
    // console.log(isLoading);
    // console.log(orders);
    // console.log(isLoading || orders);
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="div-order-list">
        {orders && orders.map((order, i) => (
          <button
            key={ i }
            className="sellerOrderlist-container"
            type="button"
            onClick={ () => history.push(`/seller/orders/${order.id}`) }
          >
            <div>
              <h4>Pedido</h4>
              <span
                data-testid={ `${testId}-order-id-${order.id}` }
              >
                {order.id}
              </span>
            </div>
            <div>
              <div className="status-container">
                <div
                  className={ order.status }
                  data-testid={ `${testId}-delivery-status-${order.id}` }
                >
                  { order.status }
                </div>
                <div>
                  <div
                    data-testid={ `${testId}-order-date-${order.id}` }
                  />
                  {order.date}
                  <span
                    data-testid={ `${testId}-card-price-${order.id}` }
                  >
                    { `${order.total_price}` }
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
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

SellerOrderList.propTypes = {
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SellerOrderList);
// export default SellerOrderList;

// { /* <div className="orderlist-container">
//         {
//           orders.map((order, i) => (
//             <div key={ i } className="order-card">
//               <div className="order-left">
//                 <span>Pedido</span>
//                 <span
//                   data-testid={ `${testId}-order-id-${order.order_id}` }
//                 >
//                   {order.order_id}
//                 </span>
//               </div>
//               <div className="order-right">
//                 <div className="status-container">
//                   <div
//                     id={ order.status }
//                     data-testid={ `${testId}-delivery-status-${order.order_id}` }
//                   >
//                     { order.status }
//                   </div>
//                   <div>
//                     <h4
//                       data-testid={ `${testId}-order-date-${order.order_id}` }
//                     >
//                       { order.date }
//                     </h4>
//                     <h4
//                       data-testid={ `${testId}-card-price-${order.order_id}` }
//                     >
//                       { `R$ ${order.price}` }
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//               <span
//                 className="address-div"
//                 data-testid={ `${testId}-card-address-${order.id}` }
//               >
//                 { order.delivery_address }
//               </span> */ }
