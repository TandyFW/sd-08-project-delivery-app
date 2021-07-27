import React from 'react'

const ProductCard = ({product}) => {
  const { id, name, price, url_image } = product;
  return (
    <section className="card">
      <span data-testid={`customer_products__element-card-price-${id}`}>{`R$ {price}`}</span>
      <img data-testid={`customer_products__img-card-bg-image-${id}`} src={url_image}/>
      <div>
        <p data-testid={`customer_products__element-card-title-${name}`}>{name}</p>
      </div>
      <div>
        <button data-testid={`customer_products__button-card-rm-item-${id}`} type="button" value="-" />
        <span data-testid={`customer_products__input-card-quantity-${id}`}>0</span>
        <button data-testid={`customer_products__button-card-add-item-${id}`} type="button" value="+" />
      </div>
    </section>
  )
}

export default ProductCard;
