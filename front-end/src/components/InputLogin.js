import React, { useEffect } from 'react';
import '../cssPages/cssLogin/login.css';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };


  useEffect(() => {
    const NUMBER_SIX = 6;
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(email) && password.length > NUMBER_SIX) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password, setDisabled]);

  return (
    <div id="page-login">
      <div
        id="Image-logo"
      />
      <h1>Lovers App</h1>

      <div id="card-login">
        <form>
          <legend id="legend-login">Login</legend>
          <input
            data-testid="common_login__input-login"
            type="text"
            id="Input-login"
            placeholder="example@gmail.com"
            name="email"
            onChange={ handleEmail }
          />

          <legend>Senha</legend>
          <input
            data-testid="common_login__input-password"
            type="text"
            id="Input-password"
            placeholder="*******"
            name="password"
            onChange={ handlePassword }
          />
        </form>
        <button
          type="button"
          id="btn-login"
          disabled={ disabled }
        >
          LOGIN
        </button>
        <button
          type="button"
          id="btn-cadastro"
          disabled={ disabled }
        >
          Ainda não tenho cadastro
        </button>
      </div>
    </div>
  );
}
