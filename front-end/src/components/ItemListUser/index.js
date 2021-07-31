import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../Apis/api1';

import {
  Container,
  ContainerItem,
  ContainerName,
  ContainerEmail,
  ContainerType,
  DeleteItem,
} from './Styled';

export default function ItemListUser(props) {
  const [users, setUsers] = useState([]);
  const { item, index, name, email, role } = props;

  useEffect(() => {
    const loadUsers = async () => {
      const responseUsers = await api.getAllUsers();
      setUsers(responseUsers);
    };
    loadUsers();
  }, []);

  const removeUser = () => {
    const updatedUsers = users
      .filter((user) => (user.id !== item)).map((user) => (user));
    setUsers(updatedUsers);
  };

  return (
    <Container>
      <ContainerItem
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {` ${index + 1} `}
      </ContainerItem>
      <ContainerName
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        {` ${name} `}
      </ContainerName>
      <ContainerEmail
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {` ${email} `}
      </ContainerEmail>
      <ContainerType
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {` ${role} `}
      </ContainerType>
      <DeleteItem
        type="button"
        data-testid={ `admin_manage__element-user-table-remove-${index}` }
        onClick={ removeUser }
      >
        Excluir
      </DeleteItem>
    </Container>
  );
}

ItemListUser.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
