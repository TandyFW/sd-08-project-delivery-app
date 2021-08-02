import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import ProductCard from './ProductCard';

export default function ProductsGalery() {
  const { cardsList } = useContext(DeliveryAppContext);
  const [isLoading, setIsLoading] = useState(true);

  const setLoadingMessage = () => {
    if (!cardsList.length) return setIsLoading(true);
    if (cardsList.length) return setIsLoading(false);
  };

  useEffect(() => setLoadingMessage(), [cardsList]);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <section className="products-galery-container">
      {cardsList.map((card, index) => <ProductCard key={ index } data={ card } />)}
    </section>
  );
}
