import md5 from 'md5';
import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Button,
  Text, Link,
} from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchUser from '../services/fetchUser';
import { emailVerify } from '../utils/functions';
import logo from '../images/Neto_Logo_Brand_Transp.png';

export default function FormLogin() {
  const { setUser } = useContext(DeliveryAppContext);
  const [isValid, setIsValid] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [URL, setURL] = useState('');

  const validation = () => {
    const emailInput = document.querySelector('#loginEmail');
    const passwordInput = document.querySelector('#loginPassword');
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (!emailVerify(email) || password.length < MIN_PASSWORRD_LENGTH) {
      setIsValid(false);
    }
    if (emailVerify(email) && password.length >= MIN_PASSWORRD_LENGTH) {
      setIsValid(true);
    }
  };

  const redirectUser = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    if (userLocalStorage) {
      switch (userLocalStorage.role) {
      case 'customer':
        return setURL('/customer/products');
      case 'seller':
        return setURL('/seller/orders');
      case 'admin':
        return setURL('/admin/manage');
      default:
        break;
      }
    }
  };

  const setStorage = (user) => {
    const { name, email, role, token, id } = user;

    const storge = {
      id,
      name,
      email,
      role,
      token,
    };

    localStorage.setItem('user', JSON.stringify(storge));
  };

  const redirectToggle = () => {
    if (URL.length) setRedirect(true);
  };

  useEffect(() => {
    redirectToggle();
    redirectUser();
  }, [URL]);

  const login = async (e) => {
    e.preventDefault();
    const user = await fetchUser(currentEmail, encryptPassword);

    if (user) {
      setUser(user);
      setStorage(user);
      setShowMessage(false);
      switch (user.role) {
      case 'customer':
        return setURL('/customer/products');
      case 'seller':
        return setURL('/seller/orders');
      case 'administrator':
        return setURL('/admin/manage');
      default:
        break;
      }
    }
    setShowMessage(true);
  };

  return (
    <Stack
      minH="100vh"
      direction={ { base: 'column', md: 'row' } }
      bgGradient="linear(to-r,orange 50%, black 50%)"
      overflow="hidden"
    >
      <Flex
        p="8"
        flex="1"
        align="center"
        justify="center"
        bg="orange"
      >
        <Stack
          w="full"
          maxW="lg"
          bg="orange"
          border="2px black solid"
          p="50"
        >
          <Heading fontSize="2xl" transform="skewX(-12deg)">Insira sua conta</Heading>
          <FormControl id="email">
            <FormLabel transform="skewX(-12deg)">Email</FormLabel>
            <Input
              type="email"
              maxLength="100"
              placeholder="Digite aqui seu email"
              className="email-input"
              focusBorderColor="black"
              _placeholder={ { color: 'white' } }
              _hover="none"
              borderColor="black"
              onKeyUp={ validation }
              autoComplete="username"
              id="loginEmail"
              data-testid="common_login__input-email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel transform="skewX(-12deg)">Password</FormLabel>
            <Input
              type="password"
              maxLength="30"
              _hover="none"
              _placeholder={ { color: 'white' } }
              focusBorderColor="black"
              placeholder="Digite aqui sua senha"
              className="password-input"
              borderColor="black"
              onKeyUp={ validation }
              autoComplete="current-password"
              id="loginPassword"
              data-testid="common_login__input-password"
              marginBottom="10"
            />
          </FormControl>
          <Button
            type="button"
            className="btn-login"
            bg="black"
            color="white"
            _hover="none"
            disabled={ !isValid }
            onClick={ login }
            id="btnLogin"
            isFullWidth="true"
            data-testid="common_login__button-login"
          >
            Login
          </Button>
          {showMessage
            && (
              <Text
                className="error-message"
                color="red"
                textAlign="center"
                data-testid="common_login__element-invalid-email"
              >
                Usuário não encontrado.
              </Text>)}
          {redirect && <Redirect to={ URL } />}
          <Text
            textAlign="center"
          >
            Ainda não tem uma conta?
          </Text>
          <Button
            variant="link"
            color="white"
            data-testid="common_login__button-register"
          >
            <Link href="/register">Registre-se</Link>
          </Button>
        </Stack>
      </Flex>
      <Flex flex="1" bg="black" p="70" transform="skewX(-5deg)" width="500px">
        <Image
          alt="Login Image"
          src={ logo }
          transform="skewX(+5deg)"
        />
      </Flex>
    </Stack>
  );
}
