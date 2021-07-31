import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../Apis/api1';
import { Container,
  FormContainer,
  NameInput,
  LoginInput,
  PasswordInput,
  SubmitButton,
  CadastroTitle,
  InnerContainer,
  AreaTitle,
  EmailLabel,
  NameLabel,
  PassLabel,
  ContainerForm,
} from './styled';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [valid, setValid] = useState(true);
  const [logged, setLogged] = useState(true);

  const submitHandler = async (e) => {
    const CREATED = 201;
    e.preventDefault();
    const result = await api.registerFetch(name, email, pass).then((data) => {
      localStorage.setItem('user', JSON.stringify(data.data));
      return data;
    })
      .catch((err) => err.message);
    if (result.status !== CREATED) {
      setLogged(false);
    } else {
      setLogged(true);
      if (result.data.role === 'customer') {
        history.push('/customer/products');
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
      <InnerContainer>
        <AreaTitle>
          <CadastroTitle>
            CADASTRO
          </CadastroTitle>
        </AreaTitle>
        <ContainerForm>
          <FormContainer onSubmit={ submitHandler }>
            <NameLabel>
              Name:
            </NameLabel>
            <NameInput
              placeholder="Seu nome"
              data-testid="common_register__input-name"
              type="text"
              name="nome"
              onChange={ ({ target }) => setName(target.value) }
            />
            <EmailLabel>
              Email:
            </EmailLabel>
            <LoginInput
              placeholder="seu-email@site.com.br"
              data-testid="common_register__input-email"
              type="text"
              name="email"
              onChange={ ({ target }) => setEmail(target.value) }
            />
            <PassLabel>
              Password:
            </PassLabel>
            <PasswordInput
              placeholder="*********"
              data-testid="common_register__input-password"
              type="password"
              name="password"
              onChange={ ({ target }) => setPass(target.value) }
            />
            <SubmitButton
              data-testid="common_register__button-register"
              disabled={ valid }
              type="submit"
            >
              REGISTER
            </SubmitButton>
          </FormContainer>
        </ContainerForm>
      </InnerContainer>
      {logged === false
        && <p data-testid="common_register__element-invalid_register">INVALIDO</p>}
    </Container>
  );
};

export default Register;
