import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InputLogin from '../components/InputLogin';

import '../styles/Login-Register.css';

function Login() {
  const history = useHistory();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) history.push('/customer/products');
  }, []);
  return (
    <InputLogin />
  );
}

export default Login;
