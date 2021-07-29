import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Loader, OrderList } from '../components';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    // verificar se o usuario está autenticado
    const Loading = 1500;
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
            <OrderList history={ history } />
          )}
      </div>
    );
  }
}

Orders.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Orders);
// export default Orders;