import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from '../components';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const Loading = 1500;
    setTimeout(() => {
      this.setState({ loading: false });
    }, Loading);
  }

  render() {
    const { history } = this.props;
    const { loading } = this.state;
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
                />
                <div className="email-div">
                  <span>Email</span>
                  <input
                    name="email"
                    className="input"
                  />
                  <span className="hidden-span" />
                </div>
                <span>Senha</span>
                <input
                  name="password"
                  type="password"
                  className="input"
                />
              </div>
              <button
                type="button"
                onClick={ () => history.push('./login') }
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
