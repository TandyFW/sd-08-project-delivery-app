import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';

const SECOND_HALF = 10;

const Home = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('./login');
    }, SECOND_HALF);
  });

  return (
    <div className="home">
      <Loader />
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
