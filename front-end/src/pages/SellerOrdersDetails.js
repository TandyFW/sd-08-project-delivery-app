import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Header, Loader, SellerOrdersDetailsList } from '../components';

class SellerOrdersDetails extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    // verificar se o usuario está autenticado
    const Loading = 10;
    setTimeout(() => {
      this.setState({ loading: false });
    }, Loading);
  }

  render() {
    const { history } = this.props;
    const { loading } = this.state;
    return (
      <div className="products-container">
        <Header history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <SellerOrdersDetailsList history={ history } />
          )}
      </div>
    );
  }
}

SellerOrdersDetails.propTypes = {
  history: PropTypes.shape().isRequired,
};

// export default connect(null, null)(SellerOrdersDetails);
export default SellerOrdersDetails;
