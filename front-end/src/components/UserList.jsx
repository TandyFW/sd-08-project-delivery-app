import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Field,
  ActionButton,
} from '../styles/components/ListItem.styled';
import colors from '../styles/colors';
import api from '../services/api';

const prefix = 'admin_manage__';
const removeUser = (id, setOK, OK) => {
  api.delete(`/delivery/users/${id}`).then(() => setOK(!OK));
};

function UserList({ index, name, email, userType, id, setOK, OK }) {
  return (
    <Container className="user-item">
      <Field
        data-testid={ `${prefix}element-user-table-item-number-${index}` }
        color={ colors.mediumseagreen }
        center
      >
        {index}
      </Field>
      <Field
        data-testid={ `${prefix}element-user-table-name-${index}` }
        color={ colors.whitesmoke }
      >
        {name}
      </Field>
      <Field
        data-testid={ `${prefix}element-user-table-email-${index}` }
        color={ colors.teal }
        txtColor={ colors.white }
        center
      >
        {email}
      </Field>
      <Field
        data-testid={ `${prefix}element-user-table-role-${index}` }
        color={ colors.indigo }
        txtColor={ colors.white }
        center
      >
        {userType}
      </Field>
      <ActionButton
        onClick={ () => removeUser(id, setOK, OK) }
        data-testid={ `${prefix}element-user-table-remove-${index}` }
        color={ colors.dodgerblue }
      >
        Excluir
      </ActionButton>
    </Container>
  );
}

UserList.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setOK: PropTypes.func.isRequired,
  OK: PropTypes.bool.isRequired,
};

export default UserList;
