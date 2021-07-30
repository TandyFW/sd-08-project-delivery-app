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
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { dispatchProducts, dispatchCart, stateUser } = this.props;
    const products = await getAllProducts();
    const LScart = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('user', JSON.stringify(stateUser));
    //
    if (LScart && LScart.length > 0) {
      LScart.forEach((element) => {
        // pass the quantity from localstorage to 'this.state'
        const { state } = this;
        state[element.id] = element.quantity;
      });
      // pass all to redux to save the user changes
      dispatchCart(LScart);
    }
    products.forEach((product) => {
      product.quantity = 1;
    });
    dispatchProducts(products);
  }

  handleChange(id, { target }) {
    const { stateCart, stateProducts, dispatchCart } = this.props;
    this.setState({ [id]: Number(target.value) });
    const productName = document.getElementById(`name-${id}`).innerText;
    const selectedProduct = stateProducts.filter((prod) => prod.name === productName);
    selectedProduct[0].quantity = Number(target.value);
    const contains = stateCart.filter((prod) => prod.name === selectedProduct[0].name);
    if (contains.length < 1) {
      stateCart.push(selectedProduct[0]);
      dispatchCart(stateCart);
    } else {
      stateCart.forEach((element, index) => {
        if (element.id === id) {
          stateCart[index].quantity = Number(target.value);
        }
      });
      dispatchCart(stateCart);
    }
    let totalPrice = 0;
    stateCart.forEach((element) => {
      totalPrice += Number((element.price * element.quantity).toFixed(2));
    });
    localStorage.setItem('totalPrice', totalPrice);
  }

  addQuantity(id) {
    const { dispatchCart, stateProducts } = this.props;
    // selects the product on DOM
    const productName = document.getElementById(`name-${id}`).innerText;
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
      // adding price into localStorage
      const localStoragePrice = localStorage.getItem('totalPrice');
      localStorage.setItem('totalPrice',
        (Number(selectedProduct[0].price)
        + Number(localStoragePrice)).toFixed(2));
    } else {
      // foreach to find the exact index of statecart, and add +1
      stateCart.forEach((element, index) => {
        if (element.id === id) {
          stateCart[index].quantity += 1;
          // adding price into localStorage
          const localStoragePrice = localStorage.getItem('totalPrice');
          localStorage.setItem('totalPrice',
            (Number(stateCart[index].price)
            + Number(localStoragePrice)).toFixed(2));
        }
      });
      // just increase one on state && localstorage
      this.setState((prevState) => ({ [id]: prevState[id] + 1 }));
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    }
  }

  decreaseQuantity(id) {
    const { dispatchCart, stateProducts, stateCart } = this.props;
    // selects the product on DOM
    const productName = document.getElementById(`name-${id}`).innerText;
    const selectedProduct = stateProducts.filter((prod) => prod.name === productName);
    const localStoragePrice = localStorage.getItem('totalPrice');
    if (selectedProduct[0].quantity < 2) {
      const cartWithout = stateCart
        .filter((prod) => prod.name !== selectedProduct[0].name);
      this.setState({ [id]: 0 });
      localStorage.setItem('cart', JSON.stringify(cartWithout));
      if (localStoragePrice > 0) {
        localStorage.setItem('totalPrice', (Number(localStoragePrice)
        - Number(selectedProduct[0].price)).toFixed(2));
      }
      dispatchCart(cartWithout);
      // decreasing localstorage price
    } else {
      // else decrease one
      selectedProduct[0].quantity -= 1;
      this.setState((prevState) => ({ [id]: prevState[id] - 1 }));
      localStorage.setItem('cart', JSON.stringify(stateCart));
      localStorage.setItem('totalPrice', (Number(localStoragePrice)
      - Number(selectedProduct[0].price)).toFixed(2));
      dispatchCart(stateCart);
    }
  }

  render() {
    const { state } = this;
    const { stateProducts, history } = this.props;
    return (
      <div className="cardlist-container">
        { stateProducts
          && stateProducts.map((product, index) => (
            <div className="product" key={ index }>
              <span
                className="price"
                data-testid={ `customer_products__element-card-price-${product.id}` }
              >
                {`R$: ${product.price}`.replace('.', ',')}
              </span>
              <img
                src={ product.urlImage }
                alt={ product.name }
                data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              />
              <span
                data-testid={ `customer_products__element-card-title-${product.id}` }
                id={ `name-${product.id}` }
              >
                {product.name}
              </span>
              <div className="quantity-div">
                <button
                  type="button"
                  id="minus"
                  onClick={ () => this.decreaseQuantity(product.id) }
                  data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                >
                  <i className="fas fa-minus" />
                </button>
                <input
                  type="number"
                  data-testid={ `customer_products__input-card-quantity-${product.id}` }
                  value={ state[product.id] }
                  onChange={ (event) => this.handleChange(product.id, event) }
                />
                <button
                  type="button"
                  id="plus"
                  onClick={ () => this.addQuantity(product.id) }
                  data-testid={ `customer_products__button-card-add-item-${product.id}` }
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          ))}
        <div className="cart-container">
          <button
            type="button"
            data-testid="customer_products__button-cart"
            onClick={ () => history.push('/checkout') }
          >
            Ver Carrinho: R$:
            <span data-testid="customer_products__checkout-bottom-value">
              {
                ` ${localStorage.getItem('totalPrice').replace('.', ',')}`
              }
            </span>
          </button>
        </div>
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
  stateUser: state.user.user,
});

CardList.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchProducts: PropTypes.func.isRequired,
  dispatchCart: PropTypes.func.isRequired,
  stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateUser: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
