import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../components';

const loadingTime = 1500;

const Home = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('./login');
    }, loadingTime);
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
