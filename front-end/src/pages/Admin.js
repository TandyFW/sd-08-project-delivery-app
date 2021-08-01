import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers } from '../services';
import { AdminUsers, AdminSignIn, Header } from '../components';
import { allUsersAction } from '../redux/actions';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async componentDidMount() {
    const { dispatchUsers } = this.props;
    const users = await getAllUsers();
    localStorage.setItem('allUsers', JSON.stringify(users.registers));
    dispatchUsers(users.registers);
  }

  componentDidUpdate() { // nao excluir
    const { state } = this;
    console.log(state.user);
  }

  render() {
    const { history } = this.props;
    return (
      <div className="ADM-Page">
        <Header history={ history } />
        <AdminSignIn newUsers={ (user) => this.setState({ user }) } />
        <AdminUsers newUsers={ (user) => this.setState({ user }) } />
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
