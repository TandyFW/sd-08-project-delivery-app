import React from 'react';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { createUser } from '../services';
import { UserTable } from '../components';

const MAX_TIME_SPAM_TEN_SECONDS = 10000;
const MIN_LENGTH_NAME = 13;
const MIN_LENGTH_PASSWORD = 6;
class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
      name: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  handleChange({ target: { name, value } }) {
    if (name === 'email') {
      const isValid = validator.validate(value.toLowerCase());
      if (isValid) {
        this.setState({ email: true });
      } else {
        this.setState({ email: false });
      }
    }
    if (name === 'password') {
      if (value.length >= MIN_LENGTH_PASSWORD) {
        this.setState({ password: true });
      } else {
        this.setState({ password: false });
      }
    }
    if (name === 'name') {
      if (value.length >= MIN_LENGTH_NAME) {
        this.setState({ name: true });
      } else {
        this.setState({ name: false });
      }
    }
  }

  async signIn({ target }) {
    const name = target.parentNode.firstChild.childNodes[1].value;
    const email = target.parentNode.firstChild.childNodes[3].value;
    const pass = target.parentNode.firstChild.childNodes[5].value;
    const role = target.parentNode.firstChild.childNodes[7].value;
    const user = await createUser(name, email, pass, role);

    if (user.statusText) {
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.innerHTML = user.message;
      hiddenSpan.setAttribute(
        'data-testid',
        'admin_manage__element-invalid_register',
      );
      setTimeout(() => {
        document.querySelector('.hidden-span').style.display = 'none';
      }, MAX_TIME_SPAM_TEN_SECONDS);
      await userAction();
      return null;
    }
  }

  render() {
    // const { history } = this.props;
    // const { loading } = this.state;
    const { email, password, name } = this.state;
    return (
      <div className="ADM-Page">
        <div className="register-form">
          <form>
            <span>Nome</span>
            <input
              autoComplete="off"
              name="name"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-name"
            />
            <span>Email</span>
            <input
              autoComplete="off"
              name="email"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-email"
            />

            <span>Senha</span>
            <input
              autoComplete="off"
              name="password"
              type="password"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-password"
            />
            <span>Tipo</span>
            <select
              name="role"
              type="select"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__select-role"
            >
              <option value="administrator">Administrador</option>
              <option value="seller">Vendedor</option>
              <option value="customer">Usuário</option>
            </select>
          </form>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ !email || !password || !name }
            onClick={ (event) => {
              this.signIn(event);
            } }
          >
            Cadastrar
          </button>
        </div>
        <span className="hidden-span" />
        <UserTable />
      </div>
    );
  }
}

export default connect(null, null)(Admin);
