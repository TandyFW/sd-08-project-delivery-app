import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { exclude } from '../services';

class UserTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{}],
    };
    this.exclude = this.exclude.bind(this);
  }

  async componentDidMount() {
    // const { dispatchTable } = this.props;
    // await userAction();
    // await dispatchTable();
  }

  // async getUsers() {
  //   const users = await getAllUsers();
  // }

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
    const { users } = this.state;
    const keyOfstatateUsers = Object.keys(users[0]);
    return (
      <div className="cardlist-container">
        <table>
          <thead>
            <tr>
              { keyOfstatateUsers
            && keyOfstatateUsers.map((title) => (
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
          {/* <tbody>

            { users && users.map((user, index) => (
              <tr
                id={ `${index}` }
                className="user"
                key={ `line-${user.id}` }
                // data-testid={ `admin_manage__element-user-table-id-${user.id}` }
              >
                { keyOfstatateUsers.map((key) => {
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
          </tbody> */}
        </table>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   // dispatchTable: () => dispatch(userActionThunk()),
// });

const mapStateToProps = (state) => ({
  stateUsers: state.user.user,
});

UserTable.propTypes = {
  // history: PropTypes.shape().isRequired,
  // dispatchTable: PropTypes.func.isRequired,
  // stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(UserTable);
