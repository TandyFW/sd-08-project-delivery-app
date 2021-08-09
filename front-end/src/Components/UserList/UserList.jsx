import { React, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { requestAllUsers } from '../../redux/actions/index.action';
import { getUserInfo } from '../../service/getLocalStorage';
import Container from './UserList.styled';

export default function UserList() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { users } = useSelector(
    (state) => state.usersReducer,
  );

  useEffect(() => {
    dispatch(requestAllUsers());
  }, [dispatch]);

  const deleteUser = async (id) => {
    try {
      await axios({
        method: 'get',
        url: `http://localhost:3001/delete/user/${id}`,
        headers: {
          authorization: getUserInfo().token,
        },
      });
      dispatch(requestAllUsers());
    } catch (e) {
      console.log(e);
    }
  };

  const prefix = 'admin_manage__element-user-table';

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          users.map((user, index) => (
            <tbody key={ index }>
              <tr>
                <td data-testid={ `${prefix}-item-number-${index}` }>{index + 1}</td>
                <td data-testid={ `${prefix}-name-${index}` }>{user.name}</td>
                <td data-testid={ `${prefix}-email-${index}` }>{user.email}</td>
                <td data-testid={ `${prefix}-role-${index}` }>{user.role}</td>
                <td data-testid={ `${prefix}-remove-${index}` }>
                  <button
                    type="submit"
                    onClick={ () => deleteUser(user.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </Container>
  );
}
