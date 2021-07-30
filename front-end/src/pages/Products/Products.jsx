import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';

import { requestAllProducts } from '../../redux/actions/index.action';
import './Products.css';

export default function Products() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { products, totalValue } = useSelector(
    (state) => state.productsReducer,
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(requestAllProducts());
  }, [dispatch]);

  const redirectToCarrinho = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar label="Produtos" text="Meus Pedidos" />
          {products.map((product, index) => (
            <Cards key={ index } product={ product } index={ index } />
          ))}
          <button
            type="button"
            data-testid="customer_products__button-cart"
            onClick={ redirectToCarrinho }
            disabled={ totalValue === 0 }
            className="button-cart"
          >
            <span data-testid="customer_products__checkout-bottom-value">
              Ver Carrinho: R$
              {' '}
              {totalValue.toFixed(2).toString().replace('.', ',')}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
