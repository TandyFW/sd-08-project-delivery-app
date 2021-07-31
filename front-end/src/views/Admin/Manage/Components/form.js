import React, { useEffect, useState, useContext } from 'react';
import Error from '../../../../components/error';
import Context from '../../../../context/Context';

const Form = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [cadUser, setCadUser] = useState(null);
  const [error, setError] = useState(true);

  const { userData } = useContext(Context);

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
    await fetch('http://localhost:3001/register', myInit)
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
    <div style={ { marginTop: '50px', marginLeft: '50px' } }>
      <form>
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
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ error }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
        {cadUser && cadUser.message
        && <Error
          testid="admin_manage__element-invalid_register"
          message={ cadUser.message }
        />}
      </form>
    </div>
  );
};

export default Form;
