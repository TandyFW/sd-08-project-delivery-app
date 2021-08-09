import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import CardOrder from '../components/CardOrder';
import NavBar from '../components/NavBar';
import { Container } from '../styles/pages/Orders.styled';
import api from '../services/api';

let socket;

const getSales = async () => {
  const result = await api.get('/delivery/sales');
  return result.data;
};

const socketStatus = async (func, status) => {
  await func(true);
  return status;
};

const Orderer = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const prefix = 'customer_orders__';
  const socketEndPoint = 'http://localhost:3002';

  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/customer/orders/${id}`);
  };

  // const fetchApi = async () => {
  //   const { data } = await axios.get('http://localhost:3001/delivery/sales');
  //   setSales(data);
  //   return data;
  // };

  useEffect(() => {
    socket = io(socketEndPoint);
    getSales()
      .then((response) => setSales(response))
      .then(() => setLoading(false));
    // fetchApi();
  }, []);

  useEffect(() => {
    socket.on('orders', ({ status, position }) => {
      socketStatus(setLoading, { status, position })
        .then((result) => {
          const newSales = sales.map((sale) => {
            if (sale.id === Number(result.position)) {
              return { ...sale, status: result.status };
            }
            return sale;
          });
          setSales(newSales);
        })
        .then(() => setLoading(false));
    });
  }, [sales]);

  return (
    <>
      <NavBar user={ user.name } contextPage="PEDIDOS" />
      <Container>
        {!loading
          && sales.length > 0
          && sales.map((sale) => (
            <div key={ sale.id }>
              <CardOrder
                prefix={ prefix }
                id={ sale.id }
                deliveryStatus={ sale.status }
                orderDate={ sale.sale_date }
                price={ sale.total_price }
                onClick={ () => goToDetails(sale.id) }
              />
            </div>
          ))}
      </Container>
    </>
  );
};

export default Orderer;
