import md5 from 'md5';
import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { Box, Button, Flex,
  FormControl, FormLabel, Heading, Input, Select, Text } from '@chakra-ui/react';
import administradorRegister from '../services/administradorRegister';
import Table from './Table';
import { HEADING_MANAGER_DETAILS } from '../utils/Lists';
import DeliveryAppContext from '../context/DeliveryAppContext';
import { emailVerify } from '../utils/functions';

export default function ManageDetails() {
  const { user } = useContext(DeliveryAppContext);
  const [isValid, setIsValid] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setEncryptPassword] = useState('');
  const [currentSelect, setCurrentSelect] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const DATA_TESTID_PREFIX = 'admin_manage__';

  const validation = () => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentName(name);
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (!emailVerify(email)
      || password.length < MIN_PASSWORRD_LENGTH
      || name.length < MIN_NAME_LENGTH) {
      setIsValid(false);
    }
    if (emailVerify(email)
      && password.length >= MIN_PASSWORRD_LENGTH
      && name.length >= MIN_NAME_LENGTH) {
      setIsValid(true);
    }
  };

  const selectType = () => {
    const currentType = document.querySelector('#type').value;
    console.log(currentType);
    setCurrentSelect(currentType);
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const newRegister = await administradorRegister({
        name: currentName,
        email: currentEmail,
        password: currentPassword,
        role: currentSelect,
        token: user.token,
      });

      if (newRegister) {
        setShowMessage(false);
      }
    } catch (err) {
      setShowMessage(true);
    }
  };

  return (
    <Box className="order-details-container" bg="orange" height="100vh">
      <Heading className="title-2" marginLeft="2" p="2">
        Cadastrar novo usuário
      </Heading>
      <Flex
        className="order-details-info-bar"
        justifyContent="space-around"
        alignItems="flex-end"
      >
        <FormControl width="80">
          <FormLabel transform="skewX(-12deg)" fontWeight="bold">Nome</FormLabel>
          <Input
            type="text"
            name="Nome"
            maxLength="100"
            placeholder="Nome e sobrenome"
            onKeyUp={ validation }
            id="name"
            size="sm"
            width="80"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            _placeholder={ { color: 'black', opacity: '0.50' } }
            data-testid={ `${DATA_TESTID_PREFIX}input-name` }
          />
        </FormControl>
        <FormControl width="80">
          <FormLabel transform="skewX(-12deg)" fontWeight="bold">Email</FormLabel>
          <Input
            type="text"
            name="Email"
            maxLength="100"
            placeholder="seu-email@site.com.br"
            onKeyUp={ validation }
            id="email"
            size="sm"
            width="80"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            _placeholder={ { color: 'black', opacity: '0.50' } }
            data-testid={ `${DATA_TESTID_PREFIX}input-email` }
          />
        </FormControl>
        <FormControl width="50">
          <FormLabel transform="skewX(-12deg)" fontWeight="bold">Senha</FormLabel>
          <Input
            type="password"
            name="Senha"
            maxLength="30"
            placeholder="**********"
            onKeyUp={ validation }
            id="password"
            size="sm"
            width="50"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            _placeholder={ { color: 'black', opacity: '0.50' } }
            data-testid={ `${DATA_TESTID_PREFIX}input-password` }
          />
        </FormControl>
        <FormControl width="40">
          <FormLabel transform="skewX(-12deg)" fontWeight="bold">Tipo</FormLabel>
          <Select
            className="type-select"
            name="type-select"
            id="type"
            size="sm"
            width="40"
            onChange={ selectType }
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            _placeholder={ { color: 'black' } }
            data-testid={ `${DATA_TESTID_PREFIX}select-role` }
          >
            <option
              className="option-type"
              value="customer"
              defaultValue="customer"
            >
              Cliente
            </option>
            <option
              className="option-type"
              value="seller"
            >
              Vendedor
            </option>
            <option
              className="option-type"
              value="adminstrator"
            >
              Administrador
            </option>
          </Select>
        </FormControl>
        <Button
          type="button"
          className="btn-confirm-delivery"
          disabled={ !isValid }
          onClick={ (e) => register(e) }
          bg="black"
          color="white"
          data-testid={ `${DATA_TESTID_PREFIX}button-register` }
        >
          CADASTRAR
        </Button>
      </Flex>
      {showMessage
        && (
          <Text
            className="error-message"
            data-testid={ `${DATA_TESTID_PREFIX}element-invalid-register` }
          >
            Usuário já cadastrado.
          </Text>)}
      <Heading className="title-2" marginLeft="2" p="2" marginTop="10">
        Lista de usuários
      </Heading>
      <Table
        heading={ HEADING_MANAGER_DETAILS }
        // body={ order && order.products }
      />
    </Box>
  );
}

// Details.propTypes = {
//   order: PropTypes.shape({
//     // id: PropTypes.number,
//     sellerId: PropTypes.number,
//     salesDate: PropTypes.string,
//     status: PropTypes.string,
//     Products: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };
