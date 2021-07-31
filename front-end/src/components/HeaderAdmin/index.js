import React from 'react';
import { useHistory } from 'react-router-dom';

import
{ Container,
  ManageUsers,
  None,
  NameAdmin,
  LogoutButton,
  /* InvalidBox, */
} from './Styled';

export default function HeaderAdmin() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Container>
      <ManageUsers>
        GERENCIAR USUÁRIOS
      </ManageUsers>
      <None>
        { ' ' }
      </None>
      <NameAdmin>
        Trybeer Admin
      </NameAdmin>
      <LogoutButton
        type="button"
        onClick={ logout }
      >
        Sair
      </LogoutButton>
    </Container>
  );
}
