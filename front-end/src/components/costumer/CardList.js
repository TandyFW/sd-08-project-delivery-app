import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts } from '../../services';
import { cartAction, productsAction } from '../../redux/actions';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { dispatchProducts, dispatchCart } = this.props;
    const products = await getAllProducts();
    const LScart = JSON.parse(localStorage.getItem('cart'));
    // localStorage.setItem('user', JSON.stringify(stateUser));
    //
    if (LScart && LScart.length > 0) {
      LScart.forEach((element) => {
        // pass the quantity from localStorage to 'this.state'
        const { state } = this;
        state[element.id] = element.quantity;
      });
      // pass all to redux to save the user changes
      dispatchCart(LScart);
    }
    products.forEach((product) => {
      product.quantity = 0;
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
    const selectedProduct = stateProducts.filter(
      (prod) => prod.name === productName,
    );
    // checks if contains on redux
    const { stateCart } = this.props;
    const contains = stateCart
      .filter((prod) => prod.name === selectedProduct[0].name);
    // if selected not in redux
    if (contains.length < 1) {
      selectedProduct[0].quantity = 1;
      // send to redux && local storage
      stateCart.push(selectedProduct[0]);
      stateCart.sort((a, b) => a.id - b.id);
      this.setState({ [id]: 1 });
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
      // adding price into localStorage
      const localStoragePrice = localStorage.getItem('totalPrice');
      localStorage.setItem(
        'totalPrice',
        (Number(selectedProduct[0].price) + Number(localStoragePrice)).toFixed(
          2,
        ),
      );
    } else {
      // foreach to find the exact index of statecart, and add +1
      stateCart.forEach((element, index) => {
        if (element.id === id) {
          stateCart[index].quantity += 1;
          // adding price into localStorage
          const localStoragePrice = localStorage.getItem('totalPrice');
          localStorage.setItem(
            'totalPrice',
            (
              Number(stateCart[index].price) + Number(localStoragePrice)
            ).toFixed(2),
          );
        }
      });
      // just increase one on state && localstorage
      this.setState((prevState) => ({ [id]: prevState[id] + 1 }));
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
    }
  }

  decreaseQuantity(id) {
    const { stateCart, dispatchCart } = this.props;
    // selects product in the redux cart
    const selected = stateCart.filter((prod) => prod.id === id)[0];
    if (selected) {
      // decrease price on LocalStorage
      const LSprice = Number(localStorage.getItem('totalPrice'));
      const formattedPrice = Number((LSprice - selected.price).toFixed(2));
      localStorage.setItem('totalPrice', JSON.stringify(formattedPrice));
    }
    // if in redux cart
    if (selected && selected.quantity > 1) {
      // decrease local and global
      this.setState((prevState) => ({ [id]: prevState[id] - 1 }));
      stateCart.forEach((prod) => {
        if (selected.id === prod.id) prod.quantity -= 1;
      });
      // send to redux && localStorage
      localStorage.setItem('cart', JSON.stringify(stateCart));
      dispatchCart(stateCart);
      // if the user clicks, and the quantity is 0
    } else if (!selected) {
      this.setState({ [id]: 0 });
      // not in redux's cart
    } else {
      // remove from local & redux
      this.setState({ [id]: 0 });
      const newCart = stateCart.filter((prod) => prod.id !== selected.id);
      // send to Redux && localStorage
      localStorage.setItem('cart', JSON.stringify(newCart));
      dispatchCart(newCart);
    }
  }

  render() {
    const { state } = this;
    const { stateProducts, history } = this.props;
    const LSprice = localStorage.getItem('totalPrice');
    return (
      <div className="cardlist-container">
        {stateProducts
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
            onClick={ () => history.push('/customer/checkout') }
            disabled={ !Number(LSprice) > 0 }
          >
            Ver Carrinho: R$:
            <span data-testid="customer_products__checkout-bottom-value">
              {
                ` ${LSprice.replace('.', ',')}`
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
  stateProducts: state.productReducer.products,
  stateCart: state.productReducer.cart,
  stateUser: state.userReducer.user,
});

CardList.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchProducts: PropTypes.func.isRequired,
  dispatchCart: PropTypes.func.isRequired,
  stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  // stateUser: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
