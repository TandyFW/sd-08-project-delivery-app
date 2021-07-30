import React from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import api from '../../Apis/api1';
// import { Context } from '../../Context';

import {
  Container,
  Form,
  ContainerDiv,
  Paragraph,
  Title,
  ContainerLabel,
  ContainerName,
  ContainerEmail,
  ContainerPassword,
  ContainerSelect,
  FinalizeRegister,
  /* InvalidBox, */
} from './Styled';

const typeUser = ['P.Vendedora', 'Cliente'];

export default function NewUserForm() {
  //   const { products } = useContext(Context);
  //   const [sellers, setSellers] = useState([]);
  //   const [selectedSeller, setSelectedSeller] = useState({});
  //   const [message, setMessage] = useState(false);
  //   const [address, setAddress] = useState({
  //     street: '',
  //     number: '',
  //   });
  //   const { totalPrice } = useContext(Context);
  //   const history = useHistory();
  //   const { token } = JSON.parse(localStorage.getItem('user'));

  //   useEffect(() => api.getAllSellers().then((response) => {
  //     setSellers([{ id: 0, name: 'Vendedor(a)' }, ...response]);
  //   }), []);

  //   const handleAddress = ({ target: { name, value } }) => {
  //     setAddress({
  //       ...address,
  //       [name]: value,
  //     });
  //   };

  //   const handleClick = async () => {
  //     const sale = {
  //       deliveryAddress: address.street,
  //       deliveryNumber: address.number,
  //       totalPrice,
  //       sellerId: parseInt(selectedSeller, 10),
  //       status: 'Pendente',
  //       products: products.filter((product) => product.quantity > 0),
  //     };
  //     const apiResponse = await api.registerSale(sale, token);
  //     setMessage(true);
  //     history.push(`/customer/orders/${apiResponse.data.response.id}`);
  //   };

  //   const handleSellerChange = ({ target }) => {
  //     setSelectedSeller(target.value);
  //   };

  return (
    <Container>
      <Form>
        <Title>Cadastrar novo usuário</Title>
        <ContainerDiv>
          <Paragraph>Nome</Paragraph>
          <ContainerLabel htmlFor="name">
            <ContainerName
              data-testid="admin_manage__input-name"
              type="text"
              id="name"
              name="name"
              placeholder="Nome e sobrenome"
            //   value={ address.street }
            //   onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Email</Paragraph>
          <ContainerLabel htmlFor="email">
            <ContainerEmail
              data-testid="admin_manage__input-email"
              type="text"
              id="email"
              name="email"
              placeholder="seu-email@site.com.br"
            //   value={ address.street }
            //   onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Senha</Paragraph>
          <ContainerLabel htmlFor="password">
            <ContainerPassword
              data-testid="admin_manage__input-password"
              type="text"
              id="password"
              name="password"
              placeholder="******"
            //   value={ address.number }
            //   onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Tipo</Paragraph>
          <ContainerLabel htmlFor="type">
            <ContainerSelect
              id="type"
              name="type"
              data-testid="admin_manage__select-role"
            //   onChange={ handleSellerChange }
            >
              { typeUser.map((type, index) => (
                <option
                  key={ index }
                >
                  { type }
                </option>
              )) }
            </ContainerSelect>
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <FinalizeRegister
            data-testid="admin_manage__button-register"
            type="button"
            //   disabled={ address.street === '' || address.number === '' }
            //   onClick={ handleClick }
          >
            CADASTRAR
          </FinalizeRegister>
          {/* {message ? <h3>Compra realizada com sucesso!</h3> : ''} */}
        </ContainerDiv>
      </Form>
    </Container>
  );
}
