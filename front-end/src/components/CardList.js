import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts } from '../services';
import { productsAction } from '../redux/actions';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { dispatchCards } = this.props;
    const products = await getAllProducts();
    dispatchCards(products);
  }

  render() {
    // const { history } = this.props;
    // console.log(history);
    const { stateProducts } = this.props;
    console.log(stateProducts);
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
                >
                  <i className="fas fa-minus" />
                </button>
                <span>0</span>
                <button
                  type="button"
                  id="plus"
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
  dispatchCards: (array) => dispatch(productsAction(array)),
});

const mapStateToProps = (state) => ({
  stateProducts: state.products.products,
});

CardList.propTypes = {
  // history: PropTypes.shape().isRequired,
  dispatchCards: PropTypes.func.isRequired,
  stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
