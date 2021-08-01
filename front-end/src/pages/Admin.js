import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers } from '../services';
import { AdminUsers, AdminSignIn } from '../components';
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
    return (
      <div className="ADM-Page">
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
  dispatchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
