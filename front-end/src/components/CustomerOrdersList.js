import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { getAllOrdesByUserApi } from '../redux/actions';

import '../styles/customerOrderDetails.css';

const testId = 'customer_orders__';

class CustomerOrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isLoading: true,
    };
    this.setAllOrdesInState = this.setAllOrdesInState.bind(this);
  }

  async componentDidMount() {
    const { getAllOrdesByUser } = this.props;
    await getAllOrdesByUser();
    this.setAllOrdesInState();
  }

  setAllOrdesInState() {
    const { allOrdes } = this.props;
    console.log(allOrdes);
    if (allOrdes) {
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        isLoading: false }));
    }
  }

  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    // const { state } = this;
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    const { orders } = this.state;
    return (
      <div className="cardlist-container">
        {
          orders.map((order, i) => (
            <div key={ i } className="customerOrderlist-container">
              <div>
                <h4>Pedido</h4>
                <span
                  data-testid={ `${testId}-order-id-${order.id}` }
                >
                  {order.id}
                </span>
              </div>
              <div
                className={ order.status }
                data-testid={ `${testId}-delivery-status-${order.id}` }
              >
                { order.status }
              </div>
              <div>
                <div
                  data-testid={ `${testId}-order-date-${order.id}` }
                >
                  { order.sale_date }
                </div>
                <div
                  data-testid={ `${testId}-card-price-${order.id}` }
                >
                  { `R$ ${order.total_price}` }
                </div>
              </div>
            </div>
          ))
        }
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

CustomerOrdersList.propTypes = {
  // history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersList);

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersList);
// export default CustomerOrdersList;
