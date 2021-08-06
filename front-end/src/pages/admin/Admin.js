import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers } from '../../services';
import { AdminUsers, AdminSignIn, AdmSellerHeader, Loader } from '../../components';
import { allUsersAction } from '../../redux/actions';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const { dispatchUsers } = this.props;
    const users = await getAllUsers();
    if (users) {
      localStorage.setItem('allUsers', JSON.stringify(users.registers));
      dispatchUsers(users.registers);
    }
    const Loading = 1000;
    setTimeout(() => {
      this.setState({ loading: false });
    }, Loading);
  }

  componentDidUpdate() { // nao excluir
    const { state } = this;
    console.log(state.user);
  }

  render() {
    const { loading } = this.state;
    const { history } = this.props;
    return (
      <div className="admin-container">
        <AdmSellerHeader history={ history } />
        {loading
          ? (
            <div className="loading-div">
              <Loader />
            </div>
          )
          : (
            <div>
              <h4>Cadastrar Novo Usuário</h4>
              <AdminSignIn newUsers={ (user) => this.setState({ user }) } />
              <h4>Lista de Usuários</h4>
              <AdminUsers newUsers={ (user) => this.setState({ user }) } />
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateUsers: state.userReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUsers: (array) => dispatch(allUsersAction(array)),
});

Admin.propTypes = {
  history: PropTypes.shape().isRequired,
  dispatchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
