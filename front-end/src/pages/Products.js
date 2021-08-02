import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Header from '../components/Header';
import ProductsGalery from '../components/ProductsGalery';

export default function Products() {
  const { route, totalPrice } = useContext(DeliveryAppContext);

  return (
    <section className="products-page">
      <Header route={ route } />
      <ProductsGalery />
      <button
        type="button"
        className="btn-link-checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <Link to="/customer/checkout">{ `Ver carrinho: R$ ${totalPrice}` }</Link>
      </button>
    </section>
  );
}
