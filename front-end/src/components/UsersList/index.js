import React from 'react';
import PropTypes from 'prop-types';
// import { Context } from '../../Context';
import ItemListUser from '../ItemListUser';
// import api from '../../Apis/api1';

import {
  Container,
  Title,
  ContainerDiv,
  /* InvalidBox, */
} from './Styled';

export default function Users(props) {
  const { users } = props;
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const loadUsers = async () => {
  //     const responseUsers = await api.getAllUsers();
  //     setUsers(responseUsers);
  //   };
  //   loadUsers();
  // }, []);

  return (
    <Container>
      <Title>Finalizar Pedido</Title>
      <ContainerDiv>
        { users.length > 0 ? (
          users.map((user, index) => (
            <ItemListUser
              key={ user.id }
              item={ user.id }
              name={ user.name }
              email={ user.email }
              role={ user.role }
              index={ index }
            />
          ))
        ) : (
          <h2>Não há usuários</h2>
        ) }
      </ContainerDiv>
    </Container>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
