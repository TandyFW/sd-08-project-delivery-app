import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';

import { requestAllProducts } from '../../redux/actions/index.action';

export default function Products() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <NavBar screen="Produtos" />
          {products.map((product, index) => (
            <Cards
              key={ index }
              product={ product }
              index={ index }
            />
          ))}
        </div>
      )}
    </div>
  );
}
