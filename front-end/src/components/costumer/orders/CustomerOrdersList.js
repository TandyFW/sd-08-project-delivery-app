import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import { getAllOrdesByUserApi } from '../../../redux/actions';

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
      allOrdes.forEach((elem) => {
        const date = elem.sale_date.split('T')[0].split('-');
        elem.sale_date = `${date[2]}/${date[1]}/${date[0]}`;
      });
      this.setState((state) => ({ ...state,
        orders: allOrdes,
        isLoading: false }));
    }
  }

  render() {
    const { isLoading } = this.state;
    const { history } = this.props;
    if (isLoading) {
      return <Loader />;
    }
    const { orders } = this.state;
    return (
      <div className="customer-orders-container">
        {
          orders.map((order, i) => (
            <button
              key={ i }
              type="button"
              onClick={ () => history.push(`/customer/orders/${order.id}`) }
            >
              <div key={ i } className="order-card">
                <div className="order-left">
                  <button
                    type="button"
                    onClick={ () => history.push(`/customer/orders/${order.id}`) }
                  >
                    <span>Pedido</span>
                    <span
                      data-testid={ `${testId}-order-id-${order.id}` }
                    >
                      {order.id}
                    </span>
                  </button>
                </div>
                <div className="order-right">
                  <div className="status-container">
                    <div
                      id={ order.status }
                      data-testid={ `${testId}element-delivery-status-${order.order_id}` }
                    >
                      { order.status }
                    </div>
                    <div>
                      <h4
                        data-testid={ `${testId}element-order-date-${order.order_id}` }
                      >
                        { order.sale_date }
                      </h4>
                      <h4
                        data-testid={ `${testId}element-card-price-${order.order_id}` }
                      >
                        { `R$ ${order.total_price}` }
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </button>
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
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersList);
