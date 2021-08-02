const axios = require('axios');

const fetchProducts = async () => {
  try {
    const products = await axios.get('http://localhost:3001/products');

    const { data } = products;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
