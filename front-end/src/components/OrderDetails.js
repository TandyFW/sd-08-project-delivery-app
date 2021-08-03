import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function OrderDetails({ order }) {
  const { sellers } = useContext(DeliveryAppContext);
  const [sellerName, setSellerName] = useState('');

  const getSellerName = () => {
    const { sellerId } = order;
    const currentSellerName = sellers.filter((seller) => seller.sellerId === sellerId);
    setSellerName(currentSellerName);
  };

  useEffect(() => getSellerName(), []);

  return (
    <section className="order-details-container">
      <h2 className="title-2">
        Detalhe do Pedido
      </h2>
        {order.map((data) => (
          <div className="order-details-info-bar" key={ data.id }>
            <p
              className="order-details-order-id"
              data-testid={ `customer_order_details__element-orderodetails-label-order-id` }
            >
              { `PEDIDO ${data.id}`}
            </p>
            <p>
              { sellerName }
            </p>
          </div>
        ))}
    </section>
  );
}
