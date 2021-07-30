import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getAllProducts } from '../services';
// import { cartAction, productsAction } from '../redux/actions';

import '../styles/customerOrderDetails.css';

const newDate = new Date();
const formatDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
const OrderDetails = {
  oderId: 1,
  sellerName: 'prof xavier',
  date: formatDate,
  status: 'entregue',
  totalPrice: 49.05,
  purchasedProducts: [
    { productId: 11,
      name: 'Skol Lata 250ml',
      quantity: 3,
      price: 2.2 },
    { productId: 22,
      name: 'Heineken 600ml',
      quantity: 4,
      price: 7.5 },
    { productId: 33,
      name: 'Antarctica Pilsen 300ml',
      quantity: 5,
      price: 2.49 },
  ],
};

class CustomerOrdersDetailsList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // async componentDidMount() {
  //   const { dispatchProducts, dispatchCart } = this.props;
  //   const products = await getAllProducts();
  // }

  render() {
    // const { history } = this.props;
    // console.log(history);
    // const { stateProducts } = this.props;
    // const { state } = this;
    return (
      <div className="customerOrdersDetailsList-div">
        <table className="customerOrdersDetailsList-table">
          <tr>
            <td>{ `Pedido ${OrderDetails.oderId}` }</td>
            <td>{ `P. Vend: ${OrderDetails.sellerName}` }</td>
            <td>{ OrderDetails.date }</td>
            <td>{ (OrderDetails.status).toLocaleUpperCase() }</td>
            <td>
              <button
                type="button"
              >
                MARCAR COMO ENTREGUE
              </button>
            </td>
          </tr>
        </table>
        <table className="text-center product-table">
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
          </tr>
          {
            OrderDetails.purchasedProducts.map((product, i) => (
              <tr key={ i }>
                <td>{ product.productId }</td>
                <td
                  className="text-left"
                >
                  { product.name }
                </td>
                <td>{ product.quantity }</td>
                <td>{ `R$ ${product.price}` }</td>
                <td>{ `R$ ${(product.price * product.quantity).toFixed(2)}` }</td>
              </tr>
            ))
          }
        </table>
        <h2>
          { `Total: R$ ${OrderDetails.totalPrice}` }
        </h2>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   dispatchProducts: (array) => dispatch(productsAction(array)),
//   dispatchCart: (array) => dispatch(cartAction(array)),
// });

// const mapStateToProps = (state) => ({
//   stateProducts: state.products.products,
//   stateCart: state.products.cart,
// });

// CustomerOrdersDetailsList.propTypes = {
//   // history: PropTypes.shape().isRequired,
//   dispatchProducts: PropTypes.func.isRequired,
//   dispatchCart: PropTypes.func.isRequired,
//   stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrdersDetailsList);
export default CustomerOrdersDetailsList;
