import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import NavBar from '../../Components/NavBar/NavBar';
import ItemTable from '../../Components/ItemTable/ItemTable';
import { getUserInfo } from '../../service/getLocalStorage';
import { socket } from '../../socket/Socket';

export default function SellerOrderDetails() {
  const [isLoading, setLoading] = useState(true);
  const [orderProducts, setOrderProducts] = useState([]);
  const { id } = useParams();
  const path = `http://localhost:3001/order/details/${id}`;
  const [orderDetailsInfos, setOrderDetailsInfos] = useState({});
  const [statusOrders, setstatusOrders] = useState('');
  // const { status } = useSelector((state) => state.status);

  // const changeStatusOrders = (newStatus) => {
  //   setstatusOrders(newStatus);
  // };

  // waitingForSocketOnEvents(changeStatusOrders);

  // export const pedidoSendoPreparado = (id) => {
  //   socket.emit('preparando', { id });
  //   return 'Preparando';
  // };
  // export const pedidoEmTransito = (id) => {
  //   socket.emit('emTransito', { id });
  //   return 'Em Trânsito';
  // };
  // export const pedidoEntregue = (id) => {
  //   socket.emit('entregue', { id });
  //   return 'Entregue';
  // };
  socket.on('preparando', () => {
    console.log('seller preparando');
    setstatusOrders('Preparando');
  });
  socket.on('emTransito', () => {
    console.log('seller emTRANSITO');
    setstatusOrders('Em Trânsito');
  });
  socket.on('entregue', () => {
    console.log('seller ENTREGUE');
    setstatusOrders('Entregue');
  });

  const formataDate = () => {
    moment.locale();
    // moment(new Date('07-18-2013 UTC')).utc().format("YYYY-MM-DD HH:mm")
    const dateFormate = moment(orderDetailsInfos.sale_date)
      .utc()
      .format('DD-MM-YYYY')
      .replaceAll('-', '/');
    return dateFormate;
  };

  const getOrderDetails = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: path,
        headers: {
          authorization: getUserInfo().token,
        },
      });
      const { products } = response.data;
      setstatusOrders(response.data.status);
      setOrderProducts(products);
      setOrderDetailsInfos(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  const prefix = 'seller_order_details__';

  const onClickPrepararPedido = async () => {
    socket.emit('preparando', { id });
    setstatusOrders('Preparando');
  };

  const onClickSaiuParaEntrega = async () => {
    // emitir socket para mudar status em transito
    socket.emit('emTransito', { id });
    setstatusOrders('Em Trânsito');
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar label="PEDIDOS" />
          <h1>Detalhe do Pedido</h1>
          <h3 data-testid={ `${prefix}element-order-details-label-order-id` }>
            Pedido
            {' '}
            {orderDetailsInfos.id}
          </h3>
          <h3 data-testid={ `${prefix}element-order-details-label-order-date` }>
            {formataDate()}
          </h3>
          <h3
            data-testid={ `${prefix}element-order-details-label-delivery-status` }
          >
            {statusOrders}
          </h3>
          <button
            type="button"
            data-testid={ `${prefix}button-preparing-check` }
            onClick={ onClickPrepararPedido }
            disabled={ statusOrders !== 'Pendente' }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            data-testid={ `${prefix}button-dispatch-check` }
            disabled={ statusOrders !== 'Preparando' }
            onClick={ onClickSaiuParaEntrega }
          >
            Saiu Para Entrega
          </button>
          <ItemTable prefix={ prefix } orderProducts={ orderProducts } />
        </div>
      )}
    </div>
  );
}
