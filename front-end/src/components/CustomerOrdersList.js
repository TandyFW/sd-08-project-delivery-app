import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { getAllOrdesByUserApi } from '../redux/actions';

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
    if (allOrdes) {
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        isLoading: false }));
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    const { orders } = this.state;
    return (
      <div className="customer-orders-container">
        {
          orders.map((order, i) => (
            <div key={ i } className="order-card">
              <a
                href={ `/customer/orders/${order.id}` }
                data-testid={ `${testId}element-order-id-${order.id}` }
              >
                {`Pedido ${order.id}` }
              </a>
              <div
                data-testid={ `${testId}element-delivery-status-${order.id}` }
              >
                { order.status }
              </div>
              <div>
                <div
                  data-testid={ `${testId}element-order-date-${order.id}` }
                >
                  { order.sale_date }
                </div>
                <div
                  data-testid={ `${testId}element-card-price-${order.id}` }
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
  getAllOrdesByUser: () => dispatch(getAllOrdesByUserApi()),
});

const mapStateToProps = (state) => ({
  allOrdes: state.ordesReducer.allOrdes,
});

CustomerOrdersList.propTypes = {
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersList);
