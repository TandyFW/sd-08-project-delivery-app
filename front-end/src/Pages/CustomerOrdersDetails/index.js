import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header, ItemList,
} from '../../components';
import api from '../../Apis/api1';
import { TotalOrder } from '../../components/ProductsList/Styled';

const TARGET_LENGTH = 4;

const formatDate = (date) => {
  const [month, day, year] = new Date(date).toLocaleDateString().split('/');
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const CustomerOrdersDetails = ({ match }) => {
  const { id } = match.params;
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState({});
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getData = async () => {
      const saleData = await api.getSaleById(id, token);
      setSale(saleData.data.response);
      const sellerData = await api.getUserById(id, token);
      setSeller(sellerData.data.response);
    };
    getData();
  }, [id, token]);

  if (!Object.keys(sale).length || !Object.keys(seller).length) return <p />;
  console.log(sale.products);

  return (
    <div>
      <Header />
      <h3>Detalhes do Pedido</h3>
      <div>
        <span>{sale.id.toString().padStart(TARGET_LENGTH, '0')}</span>
        <span>{seller.name}</span>
        <span>{formatDate(sale.sale_date)}</span>
        <span>{sale.status}</span>
        <button type="button">Marcar como entregue</button>
      </div>
      <div>
        {sale.products.length > 0 ? (
          sale.products.map((item, index) => (
            <ItemList
              key={ index }
              item={ item.id }
              description={ item.name }
              quantity={ item.salesProduct.quantity }
              unitaryValue={ item.price }
              index={ index }
              dataTestId="customer_order_details"
            />
          ))
        ) : (
          <h2>Não há produtos no carrinho</h2>
        )}
        <TotalOrder>
          Total: R$
          <span data-testid="customer_order_details__element-order-total-price">
            {sale.total_price.replace(/\./, ',')}
          </span>
        </TotalOrder>
      </div>
    </div>
  );
};

export default CustomerOrdersDetails;

CustomerOrdersDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
