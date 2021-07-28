import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllProducts } from '../services';
// import { productsAction } from '../redux/actions';
import '../styles/orderList.css';

const data = new Date();
const formatedDate = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
const orders = [
  { order_id: 1, status: 'pendente', date: formatedDate, price: 24.65 },
  { order_id: 2, status: 'preparando', date: formatedDate, price: 88.98 },
  { order_id: 3, status: 'entregue', date: formatedDate, price: 25.30 },
];
console.log(orders);

class OrderList extends React.Component {
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
      <div className="div-order-list">
        {
          orders.map((order, i) => (
            <div key={ i } className="orderlist-container">
              <div>
                <h4>Pedido</h4>
                {order.order_id}
              </div>
              <div
                className={ order.status }
              >
                { order.status }
              </div>
              <div>
                <div>{ order.date }</div>
                <div>{ `R$ ${order.price}` }</div>
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

// OrderList.propTypes = {
//   // dispatchCards: PropTypes.func.isRequired,
//   // stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
export default OrderList;
