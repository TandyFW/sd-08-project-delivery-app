import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
const SALES = 'sales';

export default {
  getAllSales: async () => axios
    .get(`${BASEURL}${SALES}`)
    .then((result) => result.data.response),
};
