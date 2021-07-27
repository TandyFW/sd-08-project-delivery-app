import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { login } from '../services';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    document.querySelector('.hidden-span').style.display = 'none';
  }

  handleChange({ target: { name, value } }) {
    const maxLength = 5;
    if (name === 'email') {
      const isValid = validator.validate(value.toLowerCase());
      if (isValid) {
        this.setState({ email: true });
      } else {
        this.setState({ email: false });
      }
    }
    if (name === 'password') {
      if (value.length > maxLength) {
        this.setState({ password: true });
      } else {
        this.setState({ password: false });
      }
    }
  }

  async signIn({ target }) {
    const { history } = this.props;
    const email = target.parentNode.parentNode.firstChild.childNodes[1].value;
    const password = target.parentNode.parentNode.firstChild.childNodes[3].value;
    const user = await login(email, password);
    if (!user.status) {
      localStorage.setItem('token', JSON.stringify(user));
      if (user.role === 'administrator') {
        history.push('/seller/orders');
      } else if (user.role === 'customer') {
        history.push('/customer/products');
      } else {
        history.push('/register');
      }
    } else {
      const spanMaxTime = 5000;
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.innerHTML = user.message;
      setTimeout(() => {
        hiddenSpan.style.display = 'none';
      }, spanMaxTime);
      return null;
    }
  }

  render() {
    const { email, password } = this.state;
    const { history } = this.props;
    return (
      <div className="login-container">
        <div className="input-div">
          <span>Email</span>
          <input
            name="email"
            placeholder="Digite seu Email"
            onChange={ this.handleChange }
            data-testid="common_login__input-email"
          />
          <span>Senha</span>
          <input
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            onChange={ this.handleChange }
            data-testid="common_login__input-password"
          />
          <span className="hidden-span" />
        </div>
        <div className="button-div">
          <button
            type="button"
            className="btn-login"
            data-testid="common_login__button-login"
            disabled={ !email || !password }
            onClick={ (event) => this.signIn(event) }
          >
            Entrar
          </button>
          <button
            type="button"
            className="btn-create"
            data-testid="common_login__button-register"
            onClick={ () => history.push('./register') }
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Login);
