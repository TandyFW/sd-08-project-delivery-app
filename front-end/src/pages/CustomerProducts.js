import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const CustomerProducts = (props) => {
  // const [shouldRedirect, setShouldRedirect] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    // if (!token) { setShouldRedirect(true); }
    axios.get('http://localhost:3001/customer/products', {
      headers: {
        authorization: token,
      },
    })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Navbar />

  );
};

export default CustomerProducts;
