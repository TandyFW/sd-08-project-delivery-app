import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SellerDetailTable from '../../components/SellerDetailTable';
import Context from '../../context/Context';
import './style.css';

function SellerDetailPage(props) {
  const { userData } = useContext(Context);
  const [order, setOrder] = useState([]);
  console.log('Detalhes', order[0]);
  const { match: { params: { id } } } = props;
  console.log(id);

  useEffect(() => {
    async function getData() {
      const myInit = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: userData.token,
        },
      };
      await fetch(`http://localhost:3001/order/${id}`, myInit)
        .then((response) => console.log(response) || response.json())
        .then((data) => setOrder(data.sale))
        .catch((err) => console.log(err));
    }
    getData();
  }, [id, userData.token]);

  function formatDate(fullDate) {
    const date = fullDate.split('T');
    const dateSplited = date[0].split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }

  if (!order[0]) return <h1>Sem produtos</h1>;

  return (
    <div className="Seller-details-container">
      <div>
        <span data-testid="seller_order_details__element-order-details-label-order-id">
          {order[0].id}
        </span>
        <span data-testid="seller_order_details__element-order-details-label-order-date">
          { formatDate(order[0].saleDate) }
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {order[0].status}
        </span>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
        >
          PREPARAR PEDIDO
        </button
        >
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled={ ['Pendente', 'Em Trânsito', 'Entregue'].includes(order[0].status) }
        >
          SAIU PARA ENTREGA
        </button
        >
      </div>
      <SellerDetailTable order={ order[0] } />
    </div>
  );
}

SellerDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SellerDetailPage;
