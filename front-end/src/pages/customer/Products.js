import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Loader, CardList } from '../../components';

class Products extends React.Component {
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
    if (!localStorage.totalPrice) localStorage.setItem('totalPrice', 0);
  }

  render() {
    const { history } = this.props;
    const { loading } = this.state;
    // localStorage.setItem('user', JSON.stringify(stateUser));
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
            <CardList history={ history } />
          )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   stateUser: state.userReducer.user,
// });

Products.propTypes = {
  history: PropTypes.shape().isRequired,
  // stateUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(null, null)(Products);
