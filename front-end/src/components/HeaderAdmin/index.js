import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

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
  const { products, setProducts } = useContext(Context);
  // const userName = JSON.parse(localStorage.getItem('user')).name;

  const logout = () => {
    localStorage.removeItem('user');
    const zeroQuantityProducts = products.map((product) => ({ ...product, quantity: 0 }));
    setProducts(zeroQuantityProducts);
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
