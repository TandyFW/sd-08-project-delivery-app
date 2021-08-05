import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../../services/api';
import CartContext from '../../context/CartContext';
import ProductCard from '../../components/Card/ProductCard';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import TotalValueTag from '../../components/TotalValueTag';
import {
  StyledProducts,
  ProductsContainer,
} from '../../styles/pages/customer/Products';

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
      <TotalValueTag
        onClick={ () => history.push('/customer/checkout') }
        testId="customer_products__button-cart"
        disabled={ getCartTotal() === 0 }
      >
        Ver carrinho
      </TotalValueTag>
    </StyledProducts>
  );
}

export default Products;
