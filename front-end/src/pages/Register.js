import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validator from 'email-validator';
import { Loader } from '../components';
import { create } from '../services';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      email: false,
      password: false,
      name: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  // componentDidMount() {
  //   const Loading = 1500;
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, Loading);
  // }

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
      const maxLength = 5;
      if (value.length > maxLength) {
        this.setState({ password: true });
      } else {
        this.setState({ password: false });
      }
    }
    if (name === 'name') {
      const MIN_LENGTH_NAME = 12;
      if (value.length > MIN_LENGTH_NAME) {
        this.setState({ name: true });
      } else {
        this.setState({ name: false });
      }
    }
  }

  async signIn({ target }) {
    const { history } = this.props;
    const name = target.parentNode.firstChild.childNodes[1].value;
    const email = target.parentNode.firstChild.childNodes[2].childNodes[1].value;
    const pass = target.parentNode.firstChild.childNodes[4].value;
    const role = 'customer';
    const user = await create(name, email, pass, role);
    console.log(user.newRegister);
    const spanMaxTime = 10000;
    if (user.statusText) {
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.innerHTML = user.message;
      hiddenSpan.setAttribute('data-testid', 'common_register__element-invalid_register');
      setTimeout(() => {
        document.querySelector('.hidden-span').style.display = 'none';
      }, spanMaxTime);
      return null;
    }
    history.push('./customer/products');
  }

  render() {
    const { loading, email, password, name } = this.state;
    return (
      <div className="register-master-container">
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <div className="register-container">
              <div className="register-form">
                <span>Nome</span>
                <input
                  name="name"
                  className="input"
                  onChange={ this.handleChange }
                  data-testid="common_register__input-name"
                />
                <div className="email-div">
                  <span>Email</span>
                  <input
                    name="email"
                    className="input"
                    onChange={ this.handleChange }
                    data-testid="common_register__input-email"
                  />
                  <span className="hidden-span" />
                </div>
                <span>Senha</span>
                <input
                  name="password"
                  type="password"
                  className="input"
                  onChange={ this.handleChange }
                  data-testid="common_register__input-password"
                />
              </div>
              <button
                type="button"
                data-testid="common_register__button-register"
                disabled={ !email || !password || !name }
                onClick={ (event) => this.signIn(event) }
              >
                Cadastrar
              </button>
            </div>
          )}
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Register);
