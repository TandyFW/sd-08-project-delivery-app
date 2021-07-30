import React from 'react';

const testId = 'customer_orders__';

class CustomerOrdersList extends React.Component {
  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    // const { state } = this;

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
                  { order.salesDate }
                </div>
                <div
                  data-testid={ `${testId}-card-price-${order.id}` }
                >
                  { `R$ ${order.totalPrice}` }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersList);
export default CustomerOrdersList;
