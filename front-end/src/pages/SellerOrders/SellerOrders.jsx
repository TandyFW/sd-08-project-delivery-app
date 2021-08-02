import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import OrderCard from '../../Components/OrderCard/OrderCard';

import { requestAllOrdersSeller } from '../../redux/actions/index.action';

export default function SellerOrders() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { sellerOrders } = useSelector(
    (state) => state.ordersReducer,
  );

  useEffect(() => {
    dispatch(requestAllOrdersSeller());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar label="PEDIDOS" />
          {sellerOrders.map((order, index) => (
            <OrderCard
              path="seller"
              key={ index }
              order={ order }
              prefix="seller_orders"
              address={ `${order.delivery_address}, ${order.delivery_number}` }
              idPedido={ index + 1 }
            />
          ))}
        </div>
      )}
    </div>
  );
}
