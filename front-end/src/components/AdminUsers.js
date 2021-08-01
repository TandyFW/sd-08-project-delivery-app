import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { exclude } from '../services';
import { allUsersAction } from '../redux/actions';

class AdminUsers extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.exclude = this.exclude.bind(this);
  }

  shouldComponentUpdate() { // nao excluir
    const { props } = this;
    if (props.newUsers) {
      console.log('shouldComponentUpdate', props.newUsers);
    }
    return true;
  }

  async exclude(id) {
    const { dispatchUsers, stateUsers } = this.props;
    const token = JSON.parse(localStorage.getItem('user'));
    const excludeResult = await exclude(id, token.token);
    if (excludeResult && excludeResult.statusText) {
      const spanMaxTime = 5000;
      const hiddenSpan = document.querySelector('.hidden-span');
      hiddenSpan.style.display = 'inline-block';
      hiddenSpan.setAttribute('data-testid', 'common_login__element-invalid-email');
      hiddenSpan.innerHTML = excludeResult.statusText;
      setTimeout(() => {
        hiddenSpan.style.display = 'none';
      }, spanMaxTime);
    } else {
      const results = stateUsers.filter((item) => item.id !== id);
      dispatchUsers(results);
      localStorage.setItem('allUsers', JSON.stringify(results));
    }
  }

  render() {
    const { stateUsers } = this.props;
    return (
      <div className="cardlist-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            { stateUsers && stateUsers.map((elem, index) => (
              <tr
                id={ `${index}` }
                className="user"
                key={ `line-${elem.id}` }
                data-testid={ `admin_manage__element-user-table-id-${elem.id}` }
              >
                <td
                  data-testid={
                    `admin_manage__element-user-table-itemNumber-${elem.id}`
                  }
                >
                  {elem.id}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${elem.id}` }
                >
                  {elem.name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${elem.id}` }
                >
                  {elem.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${elem.id}` }
                >
                  {elem.role}
                </td>
                <td>
                  <button
                    key={ `button-${elem.id}` }
                    data-testid={ `admin_manage__element-user-table-remove-${elem.id}` }
                    type="button"
                    onClick={ () => this.exclude(elem.id) }
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
  dispatchUsers: (array) => dispatch(allUsersAction(array)),
});

const mapStateToProps = (state) => ({
  stateUsers: state.userReducer.users,
});

AdminUsers.propTypes = {
  dispatchUsers: PropTypes.func.isRequired,
  stateUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  newUsers: PropTypes.arrayOf(PropTypes.object),
};

AdminUsers.defaultProps = {
  newUsers: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);