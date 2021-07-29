import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';

const StyledProducts = styled.div`
  position: relative;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 80px;
`;

const TotalValue = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  bottom: 20px;
  color: white;
  cursor: pointer;
  padding: 20px;
  position: fixed;
  right: 20px;

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

  const cartTotal = getCartTotal();

  return (
    <StyledProducts>
      <Navbar>
        <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </div>
      </Navbar>
      <ProductsContainer>
        { products.map((product) => (
          <ProductCard key={ product.id } product={ product } />)) }
      </ProductsContainer>
      <TotalValue
        disabled={ cartTotal === 0 }
        onClick={ () => history.push('/customer/checkout') }
        data-testid="customer_products__button-cart"
      >
        TOTAL: R$
        <span data-testid="customer_products__checkout-bottom-value">
          { cartTotal.toFixed(2).replace('.', ',') }
        </span>
      </TotalValue>
    </StyledProducts>
  );
}

export default Products;
