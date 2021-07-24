import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rockGlass from '../images/rockGlass.svg';

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
      <div className="loader">
        <span className="logo">Loading..</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Home);
