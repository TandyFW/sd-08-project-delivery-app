import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CheckoutCart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div className="checkout-cart-container">
        <p>Your Code Here</p>
      </div>
    );
  }
}

CheckoutCart.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(CheckoutCart);
