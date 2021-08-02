const axios = require('axios');

const fetchSellers = async () => {
  const sellers = axios.get('http://localhost:3001/seller')
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return sellers;
};
export default fetchSellers;
