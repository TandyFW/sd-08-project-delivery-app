import React, { useState } from 'react';

import NavBar from '../../Components/NavBar';

const Products = () => {
  const user = { name: 'Clênio', id: 1 }; // vem do estado global
  const [products, setProducts] = useState([]);

  return (
    <>
      <NavBar userType="client" userName={ user.name } />
      <div>os produtos vão aqui</div>
    </>
  );
};

export default Products;
