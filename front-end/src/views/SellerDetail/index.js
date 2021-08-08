import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';
import SellerDetailTable from '../../components/SellerDetailTable';
import Context from '../../context/Context';
import './style.css';
import NavBar from '../Components/NavBar';

const ENDPOINT = 'http://localhost:3001';

function SellerDetailPage(props) {
  const { userData } = useContext(Context);
  const [order, setOrder] = useState({});
  const [status, setStatus] = useState();
  const datatest = 'seller_order_details__element-order-details-label-delivery-status';
  const emtransito = 'Em Trânsito';

  const socket = socketIOClient(ENDPOINT);

  // console.log('Detalhes', order);
  // console.log('Status socket', status);

  const { match: { params: { id } } } = props;
  // console.log(id);

  const fetchData = useCallback(() => {
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
        .then((response) => response.json())
        .then((data) => setOrder(data))
        .catch((err) => console.log(err));
    }
    getData();
  }, [id, userData.token]);

  useEffect(() => {
    console.log('execute function in useEffect');
    fetchData();
  }, [fetchData]);

  // const socketCallBack = useCallback(() => {
  //   // socket.emit('setOrderStatus', { id, status: '' });
  //   socket.emit('getUpdatedStatus', id);
  //   socket.on('getUpdatedStatus', (statusFromBrack) => {
  //     setStatus(statusFromBrack);
  //   });
  // }, [id, socket]);

  useEffect(() => {
    console.log('Execuet socket call');
    // socketCallBack();
    socket.emit('getUpdatedStatus', id);
    socket.on('getUpdatedStatus', (statusFromBrack) => {
      setStatus(statusFromBrack);
    });
  }, [id, socket, socket.id]);

  function changeOrderStatus(newStatus) {
    socket.emit('setOrderStatus', { id, status: newStatus });
  }

  function formatDate(fullDate) {
    const date = fullDate.split('T');
    const dateSplited = date[0].split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }

  if (Object.keys(order).length === 0) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar userType="seller" userName={ userData.name } />
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
            {status}
          </span>
          <button
            onClick={ () => changeOrderStatus('Preparando') }
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            disabled={ ['Preparando', emtransito, 'Entregue'].includes(status) }
          >
            PREPARAR PEDIDO
          </button
          >
          <button
            onClick={ () => changeOrderStatus(emtransito) }
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            disabled={ ['Pendente', emtransito, 'Entregue'].includes(status) }
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
