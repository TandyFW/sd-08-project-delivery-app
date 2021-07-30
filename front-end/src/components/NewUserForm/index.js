import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import api from '../../Apis/api1';

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

const typeUser = ['Cliente', 'P.Vendedora'];

export default function NewUserForm() {
  // const history = useHistory();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [valid, setValid] = useState(true);
  // const [logged, setLogged] = useState(true);

  const submitHandler = async (e) => {
    const CREATED = 201;
    e.preventDefault();
    const result = await api.registerFetch(name, email, pass).then((data) => {
      localStorage.setItem('newUser', JSON.stringify(data.data));
      return data;
    })
      .catch((err) => err.message);
    if (result.status !== CREATED) {
      setValid(false);
    } else {
      setValid(true);
      if (result.data.role === 'customer') {
        console.log(result.data);
      }
    }
  };

  useEffect(() => {
    const PASSLENGHT = 6;
    const NAMELENGTH = 12;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email) && pass.length >= PASSLENGHT && name.length >= NAMELENGTH) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [email, name.length, pass]);

  return (
    <Container>
      <Form onSubmit={ submitHandler }>
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
              onChange={ ({ target }) => setName(target.value) }
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
              onChange={ ({ target }) => setEmail(target.value) }
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
              onChange={ ({ target }) => setPass(target.value) }
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
            type="submit"
            disabled={ valid }
            onClick={ () => console.log('cadastrar') }
          >
            CADASTRAR
          </FinalizeRegister>
        </ContainerDiv>
        {/* { logged === false
        && <p>Dados inválidos</p> } */}
      </Form>
    </Container>
  );
}
