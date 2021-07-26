import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <span data></span>
      <img data-testid={`customer_products__img-card-bg-image-${product.id}`}/>
    </div>
  )
}

export default ProductCard;
