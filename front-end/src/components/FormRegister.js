import md5 from 'md5';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Flex, Box, FormControl, FormLabel, Input, Stack,
  Image, Button, Heading, Text, useColorModeValue,
} from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import UserRegister from '../services/UserRegister';
import { emailVerify } from '../utils/functions';
import logo from '../images/Neto_Logo_BG_Orange_Transp.png';

export default function FormRegister() {
  const { setUser } = useContext(DeliveryAppContext);
  const [isValid, setIsValid] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const validation = () => {
    const nameInput = document.querySelector('#register-name');
    const emailInput = document.querySelector('#register-email');
    const passwordInput = document.querySelector('#register-password');
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentName(name);
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (
      !emailVerify(email)
      || password.length < MIN_PASSWORRD_LENGTH
      || name.length < MIN_NAME_LENGTH
    ) {
      return setIsValid(false);
    }
    if (
      emailVerify(email)
      && password.length >= MIN_PASSWORRD_LENGTH
      && name.length >= MIN_NAME_LENGTH
    ) {
      return setIsValid(true);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const newRegister = await UserRegister(currentName, currentEmail, encryptPassword);

      if (newRegister) {
        setUser(newRegister.user);
        setShowMessage(false);
        setRedirect(true);
      }
    } catch (err) {
      setShowMessage(true);
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="orange"
    >
      <Stack spacing="8" mx="auto" maxW="lg" py="12" px="6">
        <Stack align="center">
          <Image
            alt="Login Image"
            src={ logo }
            boxSize="150"
          />
          <Heading
            fontSize="4xl"
            textAlign="center"
            transform="skewX(-12deg)"
          >
            Inscreva-se grátis e comece a DIVERSÃO.
          </Heading>
          <Text fontSize="lg" color="#454545" transform="skewX(-12deg)">
            Aqui não entra bêbado só sai.
          </Text>
        </Stack>
        <Box
          rounded="lg"
          bg={ useColorModeValue('white', 'gray.700') }
          boxShadow="lg"
          p="8"
        >
          <FormControl id="name">
            <FormLabel fontWeight="bold" transform="skewX(-12deg)">Nome</FormLabel>
            <Input
              type="text"
              focusBorderColor="black"
              borderColor="black"
              maxLength="30"
              className="name-input"
              onKeyUp={ validation }
              autoComplete="username"
              id="register-name"
              data-testid="common_register__input-name"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel
              marginTop="3"
              fontWeight="bold"
              transform="skewX(-12deg)"
            >
              Email
            </FormLabel>
            <Input
              type="email"
              focusBorderColor="black"
              borderColor="black"
              maxLength="100"
              className="email-input"
              onKeyUp={ validation }
              autoComplete="username"
              id="register-email"
              data-testid="common_register__input-email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel
              marginTop="3"
              fontWeight="bold"
              transform="skewX(-12deg)"
            >
              Senha
            </FormLabel>
            <Input
              type="password"
              focusBorderColor="black"
              borderColor="black"
              maxLength="30"
              className="password-input"
              onKeyUp={ validation }
              autoComplete="current-password"
              id="register-password"
              data-testid="common_register__input-password"
            />
          </FormControl>
          <Button
            type="submit"
            className="btn-register"
            bg="black"
            disabled={ !isValid }
            onClick={ (e) => register(e) }
            marginTop="5"
            color="white"
            _hover="none"
            isFullWidth="true"
            id="btn-register"
            data-testid="common_register__button-register"
          >
            Registrar
          </Button>
          {showMessage
            && (
              <Text
                className="error-message"
                color="red"
                textAlign="center"
                marginTop="5"
                fontWeight="bold"
                data-testid="common_register__element-invalid_register"
              >
                Usuário já cadastrado.
              </Text>)}
          {redirect && <Redirect to="/customer/products" />}
        </Box>
      </Stack>
    </Flex>
  );
}
