import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts } from '../services';
import { cartAction, productsAction } from '../redux/actions';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { dispatchProducts } = this.props;
    const products = await getAllProducts();
    products.forEach((product) => {
      product.quantity = 1;
    });
    dispatchProducts(products);
  }

  addQuantity({ target }) {
    const { dispatchCart, stateProducts } = this.props;
    // selects the product on DOM
    const productName = target.parentNode.parentNode
      .parentNode.childNodes[1].childNodes[0].innerText;
    const selectedProduct = stateProducts.filter((prod) => prod.name === productName);
    // checks if contains on redux
    const { stateCart } = this.props;
    const contains = stateCart
      .filter((prod) => prod.name === selectedProduct[0].name);
    if (contains.length < 1) {
      // send to redux && local storage
      stateCart.push(selectedProduct[0]);
      stateCart.sort((a, b) => a.id - b.id);
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    } else {
      // just increase one
      selectedProduct[0].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    }
  }

  decreaseQuantity({ target }) {
    const { dispatchCart, stateCart } = this.props;
    // selects the product on DOM
    const productName = target.parentNode.parentNode
      .parentNode.childNodes[1].childNodes[0].innerText;
    const selectedProduct = stateCart.filter((prod) => prod.name === productName);
    // checks if exists on redux
    if (selectedProduct.length > 0) {
    // if so, its removed
      if (selectedProduct[0].quantity < 2) {
        const cartWithout = stateCart
          .filter((prod) => prod.name !== selectedProduct[0].name);
        dispatchCart(cartWithout);
        localStorage.setItem('cart', JSON.stringify(cartWithout));
      } else {
        // else decrease one
        selectedProduct[0].quantity -= 1;
        dispatchCart(stateCart);
        localStorage.setItem('cart', JSON.stringify(stateCart));
      }
    }
  }

  render() {
    // const { history } = this.props;
    // console.log(history);
    const { stateProducts } = this.props;
    return (
      <div className="cardlist-container">
        { stateProducts
          && stateProducts.map((product, index) => (
            <div className="product" key={ index }>
              <img
                src={ product.urlImage }
                alt={ product.name }
              />
              <div>
                <h4>{product.name}</h4>
              </div>
              <div className="quantity-div">
                <button
                  type="button"
                  id="minus"
                  onClick={ (event) => this.decreaseQuantity(event) }
                >
                  <i className="fas fa-minus" />
                </button>
                <span>
                  0
                </span>
                <button
                  type="button"
                  id="plus"
                  onClick={ (event) => this.addQuantity(event) }
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: (array) => dispatch(productsAction(array)),
  dispatchCart: (array) => dispatch(cartAction(array)),
});

const mapStateToProps = (state) => ({
  stateProducts: state.products.products,
  stateCart: state.products.cart,
});

CardList.propTypes = {
  // history: PropTypes.shape().isRequired,
  dispatchProducts: PropTypes.func.isRequired,
  dispatchCart: PropTypes.func.isRequired,
  stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
