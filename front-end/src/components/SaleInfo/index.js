import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import SaleInfoBody from './styled';
import { updateSalerStatusById } from '../../services/api';

const NEED_A_ZERO = 10;

export default function SaleInfo({ sale: { id, seller, saleDate, status }, role }) {
  const [statusOrder, setStatusOrder] = useState(status);

  const formatDate = () => {
    const date = new Date(saleDate);
    let day = date.getDate();
    let month = date.getMonth();
    const fullYear = date.getFullYear();

    if (day < NEED_A_ZERO) day = `0${day}`;
    if (month < NEED_A_ZERO) month = `0${month + 1}`;
    return `${day}/${month}/${fullYear}`;
  };

  const prefix = role === 'customer' ? 'customer_order_details' : 'seller_order_details';
  const { token } = JSON.parse(localStorage.getItem('user')) || '';

  return (
    <>
      <div>Detalhes do pedido</div>
      <SaleInfoBody>
        <p>
          Pedido:
          <span
            data-testid={ `${prefix}__element-order-details-label-order-id` }
          >
            { id }
          </span>
        </p>
        { role === 'customer'
     && (
       <p>
         P. Vend.
         <span
           data-testid={ `${prefix}__element-order-details-label-seller-name` }
         >
           { seller.name }
         </span>
       </p>
     ) }
        <p
          data-testid={ `${prefix}__element-order-details-label-order-date` }
        >
          { formatDate() }
        </p>
        <p
          data-testid={ `${prefix}__element-order-details-label-delivery-status` }
        >
          { statusOrder }
        </p>
        <Button
          data-testid={ `${prefix}__button-delivery-check` }
          variant="contained"
          color="primary"
          type="Button"
          style={ { display: role === 'seller' ? 'none' : 'block' } }
        >
          MARCAR COMO ENTREGUE
        </Button>
        <Button
          data-testid={ `${prefix}__button-preparing-check` }
          variant="contained"
          color="primary"
          type="Button"
          style={ { display: role === 'seller' ? 'block' : 'none' } }
          disabled={ statusOrder !== 'Pendente' }
          onClick={ () => {
            updateSalerStatusById(id, token, 'Preparando');
            setStatusOrder('Preparando');
          } }
        >
          PREPARAR PEDIDO
        </Button>
        <Button
          data-testid={ `${prefix}__button-dispatch-check` }
          variant="contained"
          color="primary"
          type="Button"
          style={ { display: role === 'seller' ? 'block' : 'none' } }
          disabled={ statusOrder !== 'Preparando' }
          onClick={ () => {
            updateSalerStatusById(id, token, 'Em Trânsito');
            setStatusOrder('Em Trânsito');
          } }
        >
          SAIU PARA ENTREGA
        </Button>
      </SaleInfoBody>
    </>
  );
}

SaleInfo.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    seller: PropTypes.objectOf(PropTypes.any).isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  role: PropTypes.string.isRequired,
};
