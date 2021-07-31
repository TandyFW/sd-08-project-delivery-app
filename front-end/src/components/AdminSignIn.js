import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { create } from '../services';
import { allUsersAction } from '../redux/actions';

class AdminSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: false,
      password: false,
      name: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
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

  async validate({ target }) {
    const { dispatchUsers, stateUsers } = this.props;
    const { props } = this;
    const spanMaxTime = 35000;
    const name = target.parentNode.firstChild.childNodes[1].value;
    const email = target.parentNode.firstChild.childNodes[3].value;
    const pass = target.parentNode.firstChild.childNodes[5].value;
    const role = target.parentNode.firstChild.childNodes[7].value;
    const newUser = await create(name, email, pass, role);
    if (newUser && newUser.statusText) {
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.innerHTML = newUser.message;
      hiddenSpan.setAttribute('data-testid', 'admin_manage__element-invalid_register');
      setTimeout(() => {
        document.querySelector('.hidden-span').style.display = 'none';
      }, spanMaxTime);
    } else {
      stateUsers.push(newUser.newRegister);
      localStorage.setItem('allUsers', JSON.stringify(stateUsers));
      dispatchUsers(stateUsers);
      props.newUsers(stateUsers);
    }
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <div className="register-form">
          <div>
            <span>Nome</span>
            <input
              name="name"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-name"
            />
            <span>Email</span>
            <input
              name="email"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-email"
            />

            <span>Senha</span>
            <input
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
          </div>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ !email || !password || !name }
            onClick={ (event) => { this.validate(event); } }
          >
            Cadastrar
          </button>

        </div>
        <span
          className="hidden-span"
          data-testid="admin_manage__element-invalid-register"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUsers: (array) => dispatch(allUsersAction(array)),
});

const mapStateToProps = (state) => ({
  stateUsers: state.user.users,
});

AdminSignIn.propTypes = {
  // history: PropTypes.shape().isRequired,
  stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchUsers: PropTypes.func.isRequired,
  newUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
