import React, { useContext, useEffect, useState } from 'react';
import './styles.css';

import Context from '../../../context/Context';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Context);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart
        .reduce((acc, val) => acc + val.quantity * val.price, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <div data-testid="customer_products__checkout-bottom-value">
      <a
        href="/customer/checkout"
        data-testid="customer_products__button-cart"
      >
        Ver carrinho:
        { total }
      </a>
    </div>
  );
};

export default Cart;
