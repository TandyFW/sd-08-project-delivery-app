import React from 'react';
import userEvent from '@testing-library/user-event';
import { internet, name } from 'faker/locale/pt_BR';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const domElements = {};
const MIN_NAME_LENGHT = 12;

const nameGen = (len) => {
  const result = [name.firstName(), name.middleName(), name.lastName()]
    .join(' ');
  return (
    (len && result.substr(0, len))
    || (result.length < MIN_NAME_LENGHT && nameGen())
    || result
  );
};

beforeEach(() => {
  const rtl = renderWithRouter(<App />);
  rtl.history.push('/register');
  domElements.nameInput = rtl.getByTestId('common_register__input-name');
  domElements.emailInput = rtl.getByTestId('common_register__input-email');
  domElements.passwordInput = rtl.getByTestId('common_register__input-password');
  domElements.buttonCadastrar = rtl.getByTestId('common_register__button-register');
});

describe('Testando pagina de Registro', () => {
  it('Verifica elementos da tela Registro', () => {
    expect(domElements.nameInput).toBeInTheDocument();
    expect(domElements.emailInput).toBeInTheDocument();
    expect(domElements.passwordInput).toBeInTheDocument();
    expect(domElements.buttonCadastrar).toBeInTheDocument();
  });
});

describe('Testando formulário de Login', () => {
  let validName;
  let validEmail;
  let validPassword;
  const MIN_PASSWORD_LENGHT = 6;
  beforeEach(() => {
    validName = nameGen(MIN_NAME_LENGHT);
    console.log(validName);
    validEmail = internet.email();
    validPassword = internet.password(MIN_PASSWORD_LENGHT);
  });

  it('Nome menor do que 12 caracteres | Não possível realizar registro', () => {
    const invalidName = validName.substr(0, MIN_NAME_LENGHT - 1);
    expect(domElements.buttonCadastrar).toBeDisabled();

    userEvent.type(domElements.nameInput, invalidName);
    userEvent.type(domElements.emailInput, validEmail);
    userEvent.type(domElements.passwordInput, validPassword);
    expect(domElements.buttonCadastrar).toBeDisabled();
  });

  it('Email fora do padrão @dominio.com | Não possível realizar login', () => {
    const invalidEmail = validEmail.replace('.', ',');
    expect(domElements.buttonCadastrar).toBeDisabled();

    userEvent.type(domElements.nameInput, validName);
    userEvent.type(domElements.emailInput, invalidEmail);
    userEvent.type(domElements.passwordInput, validPassword);
    expect(domElements.buttonCadastrar).toBeDisabled();
  });

  it('Password menor do que 6 caracteres | Não possível realizar login', () => {
    const invalidPassword = validPassword.substr(0, MIN_PASSWORD_LENGHT - 1);
    expect(domElements.buttonCadastrar).toBeDisabled();

    userEvent.type(domElements.nameInput, validName);
    userEvent.type(domElements.emailInput, validEmail);
    userEvent.type(domElements.passwordInput, invalidPassword);
    expect(domElements.buttonCadastrar).toBeDisabled();
  });

  it('Email padrão @dominio.com e password maior que 6 caracteres', () => {
    expect(domElements.buttonCadastrar).toBeDisabled();

    userEvent.type(domElements.nameInput, validName);
    userEvent.type(domElements.emailInput, validEmail);
    userEvent.type(domElements.passwordInput, validPassword);
    expect(domElements.buttonCadastrar).not.toBeDisabled();
  });
});
