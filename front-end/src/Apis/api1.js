// const baseUrl = 'bla';
import axios from 'axios';

const baseURL = 'http://localhost:3001/';
const PRODUCTS = 'products';

export default {
  productsFetch: async () => {
    const res = await axios
      .get(`${baseURL}${PRODUCTS}`);
    return res;
  },
};
