import React, { useContext, useState, useEffect } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import ProductListHeader from '../components/ProductListHeader';
import ProductResume from '../components/ProductResume';
import ProductListStatus from '../components/ProductListStatus';
import Navbar from '../components/Navbar';

const mock = [
  {
    userId: 1,
    sellerId: 2,
    totalPrice: 10.00,
    status: 'Entregue',
    productId: 1,
    name: 'Coca Cola',
    price: 5.00,
    quantity: 2,
  },
  {
    userId: 2,
    sellerId: 4,
    totalPrice: 10.00,
    status: 'Entregue',
    productId: 1,
    name: 'Pepsi',
    price: 5.00,
    quantity: 2,
  },
];

function OrderDetails() {
  const { name } = useContext(DeliveryContext);
  const [user, setUser] = useState('');
  const [details, setDetails] = useState([]);

  const mockOrder = {
    orderId: '0004',
    sellerName: user,
    orderDate: '24/07/2021',
    deliveryStatus: 'ENTREGUE',
  };

  useEffect(() => {
    setUser(name);
    setDetails(mock);
  }, []);

  return (
    <>
      <Navbar>
        <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </div>
      </Navbar>
      <h3>Detalhe do Pedido</h3>
      {ProductListStatus(mockOrder)}
      {ProductListHeader(false)}
      { details.map((element, index) => ProductResume(element, false, index))}
    </>
  );
}

export default OrderDetails;
