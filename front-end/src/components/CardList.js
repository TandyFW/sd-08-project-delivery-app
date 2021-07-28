import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts } from '../services';
import { cartAction, productsAction } from '../redux/actions';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
  }

  async componentDidMount() {
    const { dispatchProducts, dispatchCart } = this.props;
    const products = await getAllProducts();
    const localstorage = JSON.parse(localStorage.getItem('cart'));
    //
    if (localstorage && localstorage.length > 0) {
      localstorage.forEach((element) => {
        // pass the quantity from localstorage to 'this.state'
        const { state } = this;
        state[element.id] = element.quantity;
      });
      // pass all to redux to save the user changes
      dispatchCart(localstorage);
    }
    products.forEach((product) => {
      product.quantity = 1;
    });
    dispatchProducts(products);
  }

  addQuantity({ target }, id) {
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
      this.setState({ [id]: 1 });
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    } else {
      // foreach to find the exact index of statecart, and add +1
      stateCart.forEach((element, index) => {
        if (element.id === id) stateCart[index].quantity += 1;
      });
      // just increase one on state && localstorage
      this.setState((prevState) => ({ [id]: prevState[id] + 1 }));
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    }
  }

  decreaseQuantity({ target }, id) {
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
        this.setState({ [id]: 0 });
        localStorage.setItem('cart', JSON.stringify(cartWithout));
        dispatchCart(cartWithout);
      } else {
        // else decrease one
        selectedProduct[0].quantity -= 1;
        this.setState((prevState) => ({ [id]: prevState[id] - 1 }));
        localStorage.setItem('cart', JSON.stringify(stateCart));
        dispatchCart(stateCart);
      }
    }
  }

  render() {
    // const { history } = this.props;
    // console.log(history);
    const { stateProducts } = this.props;
    const { state } = this;
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
                  onClick={ (event) => this.decreaseQuantity(event, product.id) }
                >
                  <i className="fas fa-minus" />
                </button>
                <span>
                  { state[product.id] }
                </span>
                <button
                  type="button"
                  id="plus"
                  onClick={ (event) => this.addQuantity(event, product.id) }
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
