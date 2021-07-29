import React from 'react';

const date = new Date();
const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
const orders = [
  { order_id: 1, status: 'pendente', date: formatedDate, price: 24.65 },
  { order_id: 2, status: 'preparando', date: formatedDate, price: 88.98 },
  { order_id: 3, status: 'entregue', date: formatedDate, price: 25.30 },
];

class CardList extends React.Component {
  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    // const { state } = this;
    return (
      <div className="cardlist-container">
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

// export default connect(mapStateToProps, mapDispatchToProps)(CardList);
export default CardList;
