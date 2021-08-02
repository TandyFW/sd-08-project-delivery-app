import React, { useState, useEffect } from 'react';
import RequestCard from '../components/RequestCard';
import NavbarOrder from '../components/NavBarOrder';

const mock = [
  {
    id: 1,
    userId: 2,
    sellerId: 4,
    totalPrice: 500.00,
    deliveryAddress: 'Rua José Marques, Bairro: Niterói',
    deliveryNumber: '595',
    status: 'PENDENTE',
    createdAt: '07/04/2021',
  },
  {
    id: 2,
    userId: 1,
    sellerId: 3,
    totalPrice: 360.00,
    deliveryAddress: 'Rua 8, Bairro: Lapão',
    deliveryNumber: '57',
    status: 'PREPARANDO',
    createdAt: '08/04/2021',
  },
  {
    id: 3,
    userId: 3,
    sellerId: 2,
    totalPrice: 650.00,
    deliveryAddress: 'Rua Gustavo Silva, Bairro: Ano Bom',
    deliveryNumber: '79',
    status: 'ENTREGUE',
    createdAt: '09/04/2021',
  },
];

function SellerOrders() {
  const [order, setOrdet] = useState([]);

  useEffect(() => {
    setOrdet(mock);
  }, []);

  return (
    <div>
      <NavbarOrder>
        <div>
          Pedidos
        </div>
      </NavbarOrder>
      {order.map((element) => RequestCard(element, true))}
    </div>
  );
}

export default SellerOrders;
