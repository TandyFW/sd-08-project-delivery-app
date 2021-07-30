import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CheckoutAdress extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    console.log(history);
    return (
      <div className="checkout-adress-container">
        <p>Your Code Here</p>
      </div>
    );
  }
}

CheckoutAdress.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(CheckoutAdress);
