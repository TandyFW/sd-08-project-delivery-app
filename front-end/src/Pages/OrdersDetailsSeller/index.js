import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSeller, ItemListOrderSeller,
} from '../../components';
import api from '../../Apis/api1';
import { TotalOrder } from '../../components/ProductsList/Styled';

const TARGET_LENGTH = 4;

const formatDate = (date) => {
  const [month, day, year] = new Date(date).toLocaleDateString().split('/');
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const OrdersDetailsSeller = ({ match }) => {
  const { id } = match.params;
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState({});
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getData = async () => {
      const saleData = await api.getSaleById(id, token);
      setSale(saleData.data.response);
      const sellerData = await api.getUserById(saleData.data.response.seller_id, token);
      setSeller(sellerData.data.response);
    };
    getData();
  }, [id, token]);

  if (!Object.keys(sale).length || !Object.keys(seller).length) return <p />;
  console.log(seller.name);

  const handleClickChangeStatus = () => {
    setSale({
      ...sale,
      status: 'Preparando',
    });
  };

  return (
    <div>
      <HeaderSeller />
      <h3>Detalhes do Pedido</h3>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {sale.id.toString().padStart(TARGET_LENGTH, '0')}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {formatDate(sale.sale_date)}
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ handleClickChangeStatus }
        disabled={ sale.status === 'Em Trânsito' }
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        disabled={ sale.status !== 'Em Trânsito' }
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para Entrega
      </button>
      <div>
        {sale.products.length > 0 ? (
          sale.products.map((item, index) => (
            <ItemListOrderSeller
              key={ index }
              item={ item.id }
              description={ item.name }
              quantity={ item.salesProduct.quantity }
              unitaryValue={ item.price }
              index={ index }
              dataTestId="seller_order_details"
            />
          ))
        ) : (
          <h2>Não há pedidos a entregar</h2>
        )}
        <TotalOrder>
          Total: R$
          <span data-testid="seller_order_details__element-order-total-price">
            {sale.total_price.replace(/\./, ',')}
          </span>
        </TotalOrder>
      </div>
    </div>
  );
};

export default OrdersDetailsSeller;

OrdersDetailsSeller.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
