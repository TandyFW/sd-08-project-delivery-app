import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Header from '../components/Header';
import ProductsGalery from '../components/ProductsGalery';

export default function Products() {
  const { route, totalPrice } = useContext(DeliveryAppContext);

  const newPrice = totalPrice.toString().replace('.', ',');
  return (
    <section className="products-page">
      <Header route={ route } />
      <ProductsGalery />
      Ver carrinho: R$
      <Link to="/customer/checkout">
        <div
          className="btn-link-checkout"
          data-testid="customer_products__checkout-bottom-value"
        >
          <button
            type="button"
            data-testid="customer_products__button-cart"
            disabled={ totalPrice === '0.00' }
          >
            { newPrice }
          </button>
        </div>
      </Link>
    </section>
  );
}
