import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { getAllUsers, getAllProducts } from '../services';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const users = await getAllUsers();
    console.log(users);
    const products = await getAllProducts();
    console.log(products);
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
        </div>
        <div className="button-div">
          <button
            type="button"
            className="btn-login"
            data-testid="common_login__button-login"
            disabled={ !email || !password }
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
