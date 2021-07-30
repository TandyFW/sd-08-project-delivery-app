import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import RequestCard from '../components/RequestCard';
// import { getOrders } from '../services/api';

const OrdersContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 80px;
`;

const sales = [
  {
    id: '0001',
    status: 'pending',
    createdAt: '08/04/21',
    totalPrice: 50,
  },
  {
    id: '0002',
    status: 'preparing',
    createdAt: '08/04/21',
    totalPrice: 14.20,
  },
  {
    id: '0003',
    status: 'delivered',
    createdAt: '07/04/2021',
    totalPrice: 28.46,
  },
];

function Sales() {
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     getOrders().then((order) => setOrders(order));
//   });

  return (
    <>
      <Navbar>
        <div data-testid="customer_products__element-navbar-link-products">
          Produtos
        </div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </div>
      </Navbar>
      <OrdersContainer>
        {sales.map(({ id, status, createdAt, totalPrice }) => (
          <RequestCard
            key={ id }
            id={ id }
            status={ status }
            createdAt={ createdAt }
            totalPrice={ totalPrice }
          />
        ))}
      </OrdersContainer>
    </>
  );
}

export default Sales;
