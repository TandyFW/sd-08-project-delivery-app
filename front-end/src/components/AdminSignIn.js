import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'email-validator';
import { createUser } from '../services';
import { allUsersAction } from '../redux/actions';
import AdminSelect from './AdminSelect';

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

  async validate() {
    const { dispatchUsers, stateUsers } = this.props;
    const { props } = this;
    const spanMaxTime = 10000;
    const name = document.getElementById('admin-name').value;
    const email = document.getElementById('admin-email').value;
    const pass = document.getElementById('admin-password').value;
    const role = document.getElementById('admin-select').value;
    const newUser = await createUser(name, email, pass, role);
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
        <div className="admin-form">
          <label htmlFor="admin-name">
            Nome
            <input
              id="admin-name"
              name="name"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="admin-email">
            E-mail
            <input
              id="admin-email"
              name="email"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-email"
            />
          </label>
          <label htmlFor="admin-password">
            Senha
            <input
              name="password"
              id="admin-password"
              type="password"
              className="input"
              onChange={ this.handleChange }
              data-testid="admin_manage__input-password"
            />
          </label>
          <AdminSelect handleChange={ this.handleChange } />
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ !email || !password || !name }
            onClick={ this.validate }
          >
            Cadastrar
          </button>
          <span className="hidden-span" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateUsers: state.userReducer.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUsers: (array) => dispatch(allUsersAction(array)),
});

AdminSignIn.propTypes = {
  stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchUsers: PropTypes.func.isRequired,
  newUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
