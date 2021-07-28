import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthenticated from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={ { pathname: '/', state: { from: props.location } } } />
    )) }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

export default PrivateRoute;
