import React, { useContext, useEffect, useState } from 'react';
import Context from '../../../context/Context';
import NavBar from '../../Components/NavBar';

function Orders() {
  const { userData } = useContext(Context);
  const [orderData, setOrderData] = useState();
  async function fetchOrder() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userData.token,
      },
    };
    await fetch('http://localhost:3001/order/', myInit)
      .then((response) => response.json())
      .then((data) => setOrderData(data.sale))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div className="main-wrapper-orders">
      <NavBar userType={ userData.user.role } userName={ userData.user.name } />
      <div className="orders">
        {orderData && orderData.map((element, index) => (
          <div key={ index } className="orders-cards">
            <p
              data-testid={ `seller_orders__element-order-id-${element.id}` }
            >
              {`PEDIDO: ${element.id}`}
            </p>
            <p
              data-testid={ `seller_orders__element-delivery-status-${element.id}` }
            >
              {`STATUS: ${element.status}`}
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${element.id}` }
            >
              {`DATA: ${element.saleDate}`}
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${element.id}` }
            >
              {`TOTAL: ${element.totalPrice}`}
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${element.id}` }
            >
              {`ENDEREÇO: ${element.deliveryAddress}, ${element.deliveryNumber}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
