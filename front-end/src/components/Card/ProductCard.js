import React from 'react';
import Label from '../Input/Label';
import Counter from '../Input/Counter';
import productType from '../../types/product';
import {
  Wrapper,
  Image,
  PriceTag,
  Body,
} from '../../styles/components/Card/ProductCard';

const ProductCard = ({ product }) => {
  const { id, name, price, urlImage } = product;
  return (
    <Wrapper>
      <PriceTag>
        R$
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          { price.replace('.', ',') }
        </span>
      </PriceTag>
      <Image
        src={ urlImage }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Body>
        <Label
          text={ name }
          data-testid={ `customer_products__element-card-title-${id}` }
          centered
        >
          <Counter id={ id } />
        </Label>
      </Body>
    </Wrapper>
  );
};

ProductCard.propTypes = {
  product: productType.isRequired,
};

export default ProductCard;
