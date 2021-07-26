import React, { useContext, useEffect } from 'react';
import contextDelivery from '../context/Context';

function Register() {
  const {
    name,
    setName,
    setEmail,
    email,
    password,
    setPassword,
    setDisable,
    disable,
  } = useContext(contextDelivery);

  useEffect(() => {
    function buttonAble() {
      const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const SEIS = 6;
      const DOZE = 12;
      if (validEmail.test(email) && password.length >= SEIS && name.length >= DOZE) {
        setDisable(false);
      } else setDisable(true);
    }
    buttonAble();
  }, [email, password, name, setDisable]);

  return (
    <fieldset>
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="Name"
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        type="text"
        data-testid="common_register__input-email"
        placeholder="Email"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ disable }
      >
        CADASTRAR
      </button>
    </fieldset>
  );
}

export default Register;
