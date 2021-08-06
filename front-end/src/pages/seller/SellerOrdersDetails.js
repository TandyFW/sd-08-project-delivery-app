import React from 'react';
import PropTypes from 'prop-types';
import { AdmSellerHeader, Loader, SellerOrdersDetailsList } from '../../components';

class SellerOrdersDetails extends React.Component {
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
      <div className="seller-orders_details-mastercontainer">
        <AdmSellerHeader history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <div>
              <span>Detalhe do Pedido</span>
              <SellerOrdersDetailsList history={ history } />
            </div>
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
