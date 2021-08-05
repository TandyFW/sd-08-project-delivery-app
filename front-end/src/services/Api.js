import axios from 'axios';

export const createUser = async (userInfo) => {
  try {
    const { data } = await axios.post('http://localhost:3001/register', userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserByAdmin = async (userInfo, token) => {
  try {
    const { data } = await axios.post('http://localhost:3001/register/admin', userInfo, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/user');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id, token) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/user/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSaleById = async (id, token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/customer/orders/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSaleStatus = async (id, statusObj, token) => {
  try {
    const { data } = await axios.put(`http://localhost:3001/customer/orders/${id}`,
      statusObj,
      {
        headers: {
          authorization: token,
        },
      });
    return data;
  } catch (error) {
    console.log('Error on updateSaleStatus: ', error);
  }
};
