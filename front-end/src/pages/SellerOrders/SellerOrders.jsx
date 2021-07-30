import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import OrderCard from '../../Components/OrderCard/OrderCard';

import { requestAllOrders } from '../../redux/actions/index.action';

export default function SellerOrders() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { orders } = useSelector(
    (state) => state.ordersReducer,
  );

  useEffect(() => {
    dispatch(requestAllOrders());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar label="PEDIDOS" />
          {orders.map((order, index) => (
            <OrderCard
              path="seller"
              key={ index }
              order={ order }
              prefix="seller_orders"
              address={ order.address }
            />
          ))}
        </div>
      )}
    </div>
  );
}
