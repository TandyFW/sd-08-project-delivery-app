import React, { useEffect, useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import Error from '../../components/error';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const history = useHistory();
  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const NAME_MIN_LENGTH = 12;
    const re = /.+@[A-z]+[.]com/;
    if (name.length >= NAME_MIN_LENGTH
      && password.length >= PASSWORD_MIN_LENGTH
      && re.test(email)) {
      return false;
    }
    return true;
  }
  const handleSubmit = async () => {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    };
    const rawResponse = await fetch('http://localhost:3001/register', myInit);
    const content = await rawResponse.json();
    return setData(content);
  };
  useEffect(() => {
    if (data.token) {
      history.push('/customer/products');
    }
  }, [data, history]);
  return (
    <div className="main-wrapper">
      <h2>Cadastro</h2>
      <div className="content">
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu Nome"
          onChange={ (e) => setName(e.target.value) }
        />
        <input
          data-testid="common_register__input-email"
          type="email"
          placeholder="seu-email@teste.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="******"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ checkInputs() }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
        {data.message
        && <Error
          testid="common_register__element-invalid_register"
          message={ data.message }
        />}
      </div>
    </div>
  );
}

export default Register;
