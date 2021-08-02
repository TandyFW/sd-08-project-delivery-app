import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { login } from '../services';
import { loginAction } from '../redux/actions';

const MIN_LENGTH_PASSWORD = 6;
const MAX_VIEW_SPAN_FIVE_SECONDS = 5000;

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
    const { history } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'seller') {
        history.push('/seller/orders');
      } else if (user.role === 'customer') {
        history.push('/customer/products');
      } else if (user.role === 'administrator') {
        history.push('/admin/manage');
      }
    } else {
      localStorage.clear();
    }
  }

  componentWillUnmount() {
    document.querySelector('.hidden-span').style.display = 'none';
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
  }

  async signIn({ target }) {
    const { history, setDataLoginStore } = this.props;

    const email = target.parentNode.parentNode.firstChild.childNodes[1].value;
    const password = target.parentNode.parentNode.firstChild.childNodes[3].value;

    const infoLoginAccess = await login(email, password);
    localStorage.setItem('user', JSON.stringify(infoLoginAccess));

    if (infoLoginAccess.token) {
      setDataLoginStore(infoLoginAccess);

      if (infoLoginAccess.role === 'seller') {
        history.push('/seller/orders');
      } else if (infoLoginAccess.role === 'customer') {
        history.push('/customer/products');
      } else if (infoLoginAccess.role === 'administrator') {
        history.push('/admin/manage');
      } else {
        history.push('/register');
      }
    } else {
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.setAttribute(
        'data-testid',
        'common_login__element-invalid-email',
      );
      hiddenSpan.innerHTML = infoLoginAccess.message;

      setTimeout(() => {
        hiddenSpan.style.display = 'none';
      }, MAX_VIEW_SPAN_FIVE_SECONDS);
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

const mapDispatchToProps = (dispatch) => ({
  setDataLoginStore: (infoLoginAccess) => dispatch(loginAction(infoLoginAccess)),
});

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  setDataLoginStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
