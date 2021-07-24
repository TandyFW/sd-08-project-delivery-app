import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: false,
      password: false,
    };
  }

  handleChange({ target: { name, value } }) {
    const maxLength = 5;
    if (name === 'email') {
      const isValid = validator.validate(value);
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
    const { history } = this.props;
    const { email, password } = this.state;
    return (
      <div className="login-container">
        <div className="input-div">
          <span>Email</span>
          <input
            name="email"
            placeholder="Digite seu Email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <span>Senha</span>
          <input
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </div>
        <div className="button-div">
          <button
            type="button"
            className="btn-login"
            data-testid="signin-btn"
            disabled={ !email || !password }
          >
            Entrar
          </button>
          <button
            type="button"
            className="btn-create"
            data-testid="no-account-btn"
            onClick={ () => history.push('/register') }
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
