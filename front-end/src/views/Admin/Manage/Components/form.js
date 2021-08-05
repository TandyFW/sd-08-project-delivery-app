import React, { useEffect, useState, useContext } from 'react';
import Context from '../../../../context/Context';
import './styles.css';

const Form = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState(true);
  const { userData, cadUser, setCadUser } = useContext(Context);

  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const NAME_MIN_LENGTH = 12;
    const re = /.+@[A-z]+[.]com/;

    if (name.length >= NAME_MIN_LENGTH
      && password.length >= PASSWORD_MIN_LENGTH
      && re.test(email)) {
      return setError(false);
    }
    setError(true);
  }

  useEffect(() => {
    checkInputs();
  }, [name, email, password]);

  const handleSubmit = async () => {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userData.token,
      },
      body: JSON.stringify({ name, email, password, role }),
    };
    await fetch('http://localhost:3001/admin/register', myInit)
      .then((response) => response.json())
      .then((data) => setCadUser(data))
      .catch((err) => {
        setCadUser(data);
        return err;
      })
      .finally(() => {
        setPassword('');
        setEmail('');
        setName('');
      });
  };

  return (
    <div className="main-wrapper-adm">
      <h2>Cadastrar novo usuário</h2>
      <div className="input-wrapper-adm">
        <label htmlFor="name">
          Nome
          <input
            required
            id="name"
            name="name"
            type="text"
            value={ name }
            data-testid="admin_manage__input-name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            required
            id="email"
            name="email"
            type="email"
            value={ email }
            data-testid="admin_manage__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            required
            id="password"
            name="password"
            type="password"
            value={ password }
            data-testid="admin_manage__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            id="role"
            name="role"
            value={ role }
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>
        <button
          id="botao"
          name="botao"
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ error }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
        {cadUser && cadUser.message
        && <div
          data-testid="admin_manage__element-invalid-register"
          message={ cadUser.message }
        />}
      </div>
    </div>
  );
};

export default Form;
