import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, exclude } from '../services';
import { userAction } from '../redux/actions';

function funcaoBLa(users) {
  // const { stateUsers } = this.props;
  this.setState(users);
}
class UserTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{}],
    };
  }

  async componentDidMount() {
    const { dispatchTable } = this.props;
    const users = await getAllUsers() || [{}];
    funcaoBLa(users.registers);
    dispatchTable(users);
  }

  // refresh() {
  //   // re-renders the component
  //   this.setState({});
  // }

  async exclude(id) {
    const { users } = this.state;
    const result = await exclude(id);
    const results = users.filter((item) => item.id !== id);
    setState({ user: results });
    console.log(result);
  }

  render() {
    // const {users!
    // const { history } = this.props;
    // console.log(history);
    // const { stateUsers } = this.props;
    const { users } = this.state;
    // console.log(stateUsers.registers);
    // const tableUser = stateUsers.registers || [{}];
    const keyOfstatateUsers = Object.keys(users[0]);
    // keyOfstatateUsers.push('Excluir');
    return (
      <div className="cardlist-container">
        <table>
          <thead>
            <tr>
              { keyOfstatateUsers
            && keyOfstatateUsers.map((title) => (
              <th key={ title }>{title}</th>
            ))}

              <th key="excluir">Excluir</th>
            </tr>
          </thead>
          <tbody>

            { users && users.map((user, index) => (
              <tr
                id={ `${index}` }
                className="user"
                key={ user.id }
                data-testid={ `admin_manage__element-user-table-item-number-${user.id}` }
              >
                { keyOfstatateUsers.map((key) => (
                  <td key={ key }>{user[key]}</td>
                ))}
                <td>
                  <button
                    type="button"
                    onClick={ () => { exclude(user.id); this.refresh(); } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchTable: (array) => dispatch(userAction(array)),
});

const mapStateToProps = (state) => ({
  stateUsers: state.userReducer.user,
});

UserTable.propTypes = {
  // history: PropTypes.shape().isRequired,
  dispatchTable: PropTypes.func.isRequired,
  // stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
