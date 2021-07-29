import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Counter from './Counter';

const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  height: 300px;
  max-width: 300px;
  object-fit: contain;
  width: 300px;
`;

const PriceTag = styled.p`
  background-color: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  left: 10px;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
`;

const Body = styled.div`
  align-items: center;
  background-color: #eaf1ef;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

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
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
