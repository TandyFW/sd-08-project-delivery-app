import React, { useEffect, useState } from 'react';

import NavBar from '../../Components/NavBar';
// import Context from '../../../context/Context';
import './styles.css';

const Products = () => {
  const user = { name: 'Clênio', id: 1 }; // vem do estado global
  const [products, setProducts] = useState([]);

  // const { cart, setCart } = useContext(Context);

  async function getData() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    await fetch('http://localhost:3001/customer/products', myInit)
      .then((response) => response.json())
      .then((data) => console.log(data.products) || setProducts(data.products))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="conteiner">
      <NavBar userType="client" userName={ user.name } />
      {products.length > 0 && (
        products.map((product) => (
          <div key={ product.id }>
            <div className="card">
              <div>{product.price}</div>
              <div className="card_img">
                <img
                  src={ product.url_image }
                  alt="produto"
                />
              </div>
              <div className="card_body">
                <h6><b>{product.name}</b></h6>
              </div>
            </div>
          </div>
        )))}
    </div>
  );
};

export default Products;
