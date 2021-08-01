import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { exclude } from '../services';
import Loader from './Loader';
import { getAllUsersApi } from '../redux/actions';

class UserTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,
    };

    this.exclude = this.exclude.bind(this);
    this.setAllUsersInState = this.setAllUsersInState.bind(this);
  }

  async componentDidMount() {
    const { getAllUsers } = this.props;
    await getAllUsers();
    this.setAllUsersInState();
  }

  setAllUsersInState() {
    const { allUsers } = this.props;
    this.setState((state) => ({ ...state, users: allUsers, isLoading: false }));
  }

  async exclude(id) {
    const { users } = this.state;
    const excludeResult = await exclude(id);
    console.log(excludeResult);
    if (!excludeResult.status) {
      const results = users.filter((item) => item.id !== id);
      this.setState({ users: results });
    } else {
      const spanMaxTime = 5000;
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.setAttribute('data-testid', 'common_login__element-invalid-email');
      hiddenSpan.innerHTML = excludeResult.statusText;
      setTimeout(() => {
        hiddenSpan.style.display = 'none';
      }, spanMaxTime);
      return null;
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    const item = 'admin_manage__element-user-table-';
    const remove = 'admin_manage__element-user-table-remove-';
    const { users } = this.state;
    const namesTables = Object.keys(users[0]);
    return (
      <div className="cardlist-container">
        <table>
          <thead>
            <tr>
              { namesTables.map((title) => (
                <th
                  data-testid={ `admin_manage__element-user-table-${title}` }
                  key={ `title-${title}` }
                >
                  {title}
                </th>
              ))}
              <th key="title-excluir">Excluir</th>
            </tr>
          </thead>
          <tbody>
            { users && users.map((user, index) => (
              <tr
                id={ `${index}` }
                className="user"
                key={ `line-${user.id}` }
                data-testid={ `admin_manage__element-user-table-id-${user.id}` }
              >
                { namesTables.map((key) => {
                  if (user.role !== 'administrator') {
                    return (
                      <td
                        key={ `${key}-${user.id}` }
                        data-testid={ `${item}${key}-${user.id}` }
                      >
                        {user[key]}
                      </td>
                    );
                  } return null;
                })}
                <td>
                  <button
                    key={ `button-${user.id}` }
                    data-testid={ `${remove}${user.id}` }
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
  getAllUsers: () => dispatch(getAllUsersApi()),
});

const mapStateToProps = (state) => ({
  allUsers: state.userReducer.allUsers,
});

UserTable.propTypes = {
  // history: PropTypes.shape().isRequired,
  getAllUsers: PropTypes.func.isRequired,
  allUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  // stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
