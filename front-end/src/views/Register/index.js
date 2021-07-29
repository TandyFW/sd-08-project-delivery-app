import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import Error from '../../components/error';
import Context from '../../context/Context';

function Register() {
  const { setUserData, userData } = useContext(Context);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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

  useEffect(() => {
    if (userData.token) {
      history.push('/customer/products');
    }
  }, [history, userData.token]);

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
    return setUserData(content);
  };
  return (
    <div className="main-wrapper">
      <h2>Cadastro</h2>
      <div className="container">
        <div className="form-control">
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
        </div>
        <button
          className="btn"
          data-testid="common_register__button-register"
          type="submit"
          disabled={ checkInputs() }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
        {userData.message
        && <Error
          testid="common_register__element-invalid_register"
          message={ userData.message }
        />}
      </div>
    </div>
  );
}

export default Register;
