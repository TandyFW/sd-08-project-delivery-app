import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, exclude } from '../services';
import { userAction } from '../redux/actions';

class UserTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{}],
    };
    this.funcaoBLa = this.funcaoBLa.bind(this);
    this.exclude = this.exclude.bind(this);
  }

  async componentDidMount() {
    const { dispatchTable } = this.props;
    const users = await getAllUsers() || [{}];
    this.funcaoBLa(users.registers);
    dispatchTable(users);
  }

  funcaoBLa(users) {
    // const { stateUsers } = this.props;
    console.log(users);
    this.setState({ users });
  }
  // refresh() {
  //   // re-renders the component
  //   this.setState({});
  // }

  async exclude(id) {
    const { users } = this.state;
    console.log('entrou bosta');
    const result = await exclude(id);
    console.log(result);
    const results = users.filter((item) => item.id !== id);
    console.log(results);
    this.setState({ users: results });
  }

  render() {
    // const {users!
    // console.log(history);
    // const { stateUsers } = this.props;
    // const { xablau } = this.props;
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
                    onClick={ () => this.exclude(user.id) }
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
  // xablau: PropTypes.shape().isRequired,
  // stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
