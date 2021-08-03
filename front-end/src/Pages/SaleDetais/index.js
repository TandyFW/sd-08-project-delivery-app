/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core/';
import { getSaleById } from '../../services/api';
import { logout } from '../../services/auth';
import Header from '../../components/Header';
import { clientHeaderLinks } from '../../services/HeaderButtons';

function SaleDetails({ match: { params: { id } } }) {
  const history = useHistory();

  const [_sale, setSale] = useState({});

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    getSaleById(id, token)
      .then(setSale)
      .catch((err) => {
        const UNAUTHORIZED = 401;
        if (err.response.status === UNAUTHORIZED) logout(history);
      });
  }, []);

  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <div>
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          id
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          nome vendedor
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          data
        </span>
        <span
          data-testid={ `customer_order_details__
        element-order-details-label-delivery-status` }
        >
          Status
        </span>
        <Button
          variant="contained"
          color="primary"
          data-testid="customer_order_details__button-delivery-check"
        />
      </div>
    </div>
  );
}

SaleDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SaleDetails;
