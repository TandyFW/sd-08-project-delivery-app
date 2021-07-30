import React from 'react';

const date = new Date();
const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const orders = [
  { order_id: 1, status: 'pendente', date: formatedDate, price: 24.65 },
  { order_id: 2, status: 'preparando', date: formatedDate, price: 88.98 },
  { order_id: 3, status: 'entregue', date: formatedDate, price: 25.30 },
];

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
                  data-testid={ `${testId}-order-id-${order.order_id}` }
                >
                  {order.order_id}
                </span>
              </div>
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
                <div
                  data-testid={ `${testId}-card-price-${order.order_id}` }
                >
                  { `R$ ${order.price}` }
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
