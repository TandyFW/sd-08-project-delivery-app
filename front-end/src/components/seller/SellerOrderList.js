import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { getAllOrdesBySellerApi } from '../../redux/actions';

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
    const { getAllOrdesByUser } = this.props;
    await getAllOrdesByUser();
    this.setAllOrdesInState();
  }

  async setAllOrdesInState() {
    const { allOrdes } = this.props;
    if (allOrdes) {
      allOrdes.forEach((ordes) => {
        const dateArray = ordes.sale_date.split('T')[0].split('-');
        ordes.date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
      });

      this.setState((state) => ({ ...state,
        orders: allOrdes,
        isLoading: false }));
    }
  }

  render() {
    const { history } = this.props;
    const { isLoading } = this.state;
    const { orders } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="orderlist-container">
        {orders && orders.map((order, i) => (
          <button
            key={ i }
            type="button"
            onClick={ () => history.push(`/seller/orders/${order.id}`) }
          >
            <div className="order-card">
              <div className="order-left">
                <span>Pedido</span>
                <span
                  data-testid={ `${testId}-order-id-${order.id}` }
                >
                  {order.id}
                </span>
              </div>
              <div className="order-right">
                <div className="status-container">
                  <div
                    id={ order.status }
                    data-testid={ `${testId}-delivery-status-${order.id}` }
                  >
                    { order.status }
                  </div>
                  <div>
                    <h4
                      data-testid={ `${testId}-order-date-${order.id}` }
                    >
                      {order.date}
                    </h4>
                    <h4
                      data-testid={ `${testId}-card-price-${order.id}` }
                    >
                      { `R$ ${order.total_price.replace('.', ',')}` }
                    </h4>
                  </div>
                </div>
                <span>
                  {`${order.delivery_address}, ${order.delivery_number}`}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllOrdesByUser: () => dispatch(getAllOrdesBySellerApi()),
});

const mapStateToProps = (state) => ({
  allOrdes: state.ordesReducer.allOrdes,
});

SellerOrderList.propTypes = {
  history: PropTypes.shape().isRequired,
  getAllOrdesByUser: PropTypes.func.isRequired,
  allOrdes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SellerOrderList);
