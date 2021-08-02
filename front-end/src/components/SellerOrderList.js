import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllProducts } from '../services';
// import { productsAction } from '../redux/actions';
import '../styles/sellerOrderList.css';

const data = new Date();
const formatedDate = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
const orders = [
  { order_id: 1, status: 'pendente', date: formatedDate, price: 24.65, address: 'Rua 1' },
  { order_id: 2,
    status: 'preparando',
    date: formatedDate,
    price: 88.98,
    address: 'Rua 2' },
  { order_id: 3, status: 'entregue', date: formatedDate, price: 25.30, address: 'Rua 3' },
];

const testId = 'seller_orders__element';

class SellerOrderList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // async componentDidMount() {
  //   // const { dispatchCards } = this.props;
  //   // const products = await getAllProducts();
  //   // dispatchCards(products);
  // }

  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    return (
      <div className="orderlist-container">
        {
          orders.map((order, i) => (
            <div key={ i } className="order-card">
              <div className="order-left">
                <span>Pedido</span>
                <span
                  data-testid={ `${testId}-order-id-${order.order_id}` }
                >
                  {order.order_id}
                </span>
              </div>
              <div className="order-right">
                <div className="status-container">
                  <div
                    className={ order.status }
                    data-testid={ `${testId}-delivery-status-${order.order_id}` }
                  >
                    { order.status }
                  </div>
                  <div>
                    <div
                      data-testid={ `${testId}-order-date-${order.order_id}` }
                    >
                      { order.date }
                    </div>
                    <span
                      data-testid={ `${testId}-card-price-${order.order_id}` }
                    >
                      { `R$ ${order.price}` }
                    </span>
                  </div>
                </div>
                <span
                  className="address-div"
                  data-testid={ `${testId}-card-address-${order.order_id}` }
                >
                  { order.address }
                </span>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   dispatchCards: (array) => dispatch(productsAction(array)),
// });

// const mapStateToProps = (state) => ({
//   stateProducts: state.products.products,
// });

// SellerOrderList.propTypes = {
//   // dispatchCards: PropTypes.func.isRequired,
//   // stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SellerOrderList);
export default SellerOrderList;
