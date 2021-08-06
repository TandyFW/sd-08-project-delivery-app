import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdmSellerHeader, Loader, SellerOrderList } from '../../components';

class SellerOrders extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    // verificar se o usuario está autenticado
    const Loading = 1000;
    setTimeout(() => {
      this.setState({ loading: false });
    }, Loading);
  }

  render() {
    const { history } = this.props;
    const { loading } = this.state;
    return (
      <div className="orders-container">
        <AdmSellerHeader history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <SellerOrderList history={ history } />
          )}
      </div>
    );
  }
}

SellerOrders.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(SellerOrders);
