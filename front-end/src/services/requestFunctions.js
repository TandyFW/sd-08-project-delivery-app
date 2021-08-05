import api from './api';

const getSale = async (id) => {
  const result = await api.get(`/delivery/sales/${id}`);
  return result.data;
};
module.exports = { getSale };
