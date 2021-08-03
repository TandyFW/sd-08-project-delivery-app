import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SellerDetailTable from '../../components/SellerDetailTable';
import Context from '../../context/Context';
import './style.css';
import NavBar from '../Components/NavBar';

function SellerDetailPage(props) {
  const { userData } = useContext(Context);
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState('Pendente');
  const datatest = 'seller_order_details__element-order-details-label-delivery-status';

  console.log('Detalhes', order);

  const { match: { params: { id } } } = props;
  console.log(id);

  useEffect(() => {
    const userDataLocal = JSON.parse(localStorage.getItem('user'));
    async function getData() {
      const myInit = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: userData.token || userDataLocal.token,
        },
      };
      await fetch(`http://localhost:3001/order/${id}`, myInit)
        .then((response) => console.log(response) || response.json())
        .then((data) => console.log(data) || setOrder(data))
        .catch((err) => console.log(err));
    }
    getData();
  }, [id, userData.token]);

  function formatDate(fullDate) {
    const date = fullDate.split('T');
    const dateSplited = date[0].split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }

  if (Object.keys(order).length === 0) return <h1>Loading...</h1>;

  function changeOrderStatus() {
    setOrderStatus('Preparando');
  }

  return (
    <div>
      <NavBar userType="customer" userName={ userData.name } />
      <div className="Seller-details-container">
        <div>
          <span data-testid="seller_order_details__element-order-details-label-order-id">
            {order.id}
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { formatDate(order.saleDate) }
          </span>
          <span
            data-testid={ datatest }
          >
            {orderStatus}
          </span>
          <button
            onClick={ () => changeOrderStatus() }
            data-testid="seller_order_details__button-preparing-check"
            type="button"
          >
            PREPARAR PEDIDO
          </button
          >
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            disabled={ ['Pendente', 'Em Trânsito', 'Entregue'].includes(order.status) }
          >
            SAIU PARA ENTREGA
          </button
          >
        </div>
        <SellerDetailTable order={ order } />
      </div>
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
