import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ProductCard from '../../components/Card/ProductCard';
import * as api from '../../services/api';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import TotalValueTag from '../../components/TotalValueTag';

const StyledProducts = styled.div`
  position: relative;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 80px;
`;

const ProductsTotalValueTag = styled(TotalValueTag)`
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

function Products() {
  const { products, setProducts, getCartTotal } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    api.getProducts().then((result) => setProducts(result));
  }, [setProducts]);

  return (
    <StyledProducts>
      <CustomerNavbar />
      <ProductsContainer>
        { products.map((product) => (
          <ProductCard key={ product.id } product={ product } />)) }
      </ProductsContainer>
      <ProductsTotalValueTag
        onClick={ () => history.push('/customer/checkout') }
        testId="customer_products__button-cart"
        disabled={ getCartTotal() === 0 }
      >
        Ver carrinho
      </ProductsTotalValueTag>
    </StyledProducts>
  );
}

export default Products;
