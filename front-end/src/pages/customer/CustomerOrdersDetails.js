import React from 'react';
import PropTypes from 'prop-types';
import { Header, Loader, CustomerOrdersDetailsList } from '../../components';

class CustomerOrdersDetails extends React.Component {
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
      <div className="cust-orders_details-mastercontainer">
        <Header history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <CustomerOrdersDetailsList history={ history } />
          )}
      </div>
    );
  }
}

CustomerOrdersDetails.propTypes = {
  history: PropTypes.shape().isRequired,
};

// export default connect(null, null)(CustomerOrdersDetails);
export default CustomerOrdersDetails;
