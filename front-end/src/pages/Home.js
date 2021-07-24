import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';

class Home extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const number = 1500;
    setTimeout(() => {
      history.push('./login');
    }, number);
  }

  render() {
    return (
      <div className="home">
        <Loader />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
