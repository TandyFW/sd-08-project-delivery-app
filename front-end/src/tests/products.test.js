/* eslint-disable */
import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { internet, name } from 'faker/locale/pt_BR';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const domElements = {};
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJuYW1lIjoiQ2xpZW50ZSBaw6kgQmlyaXRhIiwiZW1haWwiOiJ6ZWJpcml0YUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjFjMzc0NjZjMTU5NzU1Y2UxZmExODFiZDI0N2NiOTI1Iiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTYyODExMTQ1OH0.jp1ZC6tclp_Bv5Uu4Gzb1XlkBh79DFoGW_Rl7gOcU9w';
// const MIN_NAME_LENGHT = 12;

// const nameGen = (len) => {
//   const result = [name.firstName(), name.middleName(), name.lastName()]
//     .join(' ');
//   return (
//     (len && result.substr(0, len))
//     || (result.length < MIN_NAME_LENGHT && nameGen())
//     || result
//   );
// };

beforeEach(() => {
  window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify({
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    role: 'customer',
    token,
  }));
  const rtl = renderWithRouter(<App />);
  rtl.history.push('/customer/products');
  domElements.userFullName = rtl
    .getByTestId('customer_products__element-navbar-user-full-name');
  domElements.buttonLogout = rtl
    .getByTestId('customer_products__element-navbar-link-logout');
  domElements.buttonProductCart = rtl.getByTestId('customer_products__button-cart');
  domElements.buttonValue = rtl.getByTestId('customer_products__checkout-bottom-value');
});

describe('Testando pagina de Produtos', () => {
  it('Verifica elementos da tela ProdutosRegistro', () => {
    expect(domElements.userFullName).toBeInTheDocument();
    expect(domElements.buttonLogout).toBeInTheDocument();
    expect(domElements.buttonProductCart).toBeInTheDocument();
    expect(domElements.buttonValue).toBeInTheDocument();
  });
});

// describe('Testando formulário de Login', () => {
//   let validName;
//   let validEmail;
//   let validPassword;
//   const MIN_PASSWORD_LENGHT = 6;
//   beforeEach(() => {
//     validName = nameGen(MIN_NAME_LENGHT);
//     console.log(validName);
//     validEmail = internet.email();
//     validPassword = internet.password(MIN_PASSWORD_LENGHT);
//   });

//   it('Nome menor do que 12 caracteres | Não possível realizar registro', () => {
//     const invalidName = validName.substr(0, MIN_NAME_LENGHT - 1);
//     expect(domElements.buttonCadastrar).toBeDisabled();

//     userEvent.type(domElements.nameInput, invalidName);
//     userEvent.type(domElements.emailInput, validEmail);
//     userEvent.type(domElements.passwordInput, validPassword);
//     expect(domElements.buttonCadastrar).toBeDisabled();
//   });

//   it('Email fora do padrão @dominio.com | Não possível realizar login', () => {
//     const invalidEmail = validEmail.replace('.', ',');
//     expect(domElements.buttonCadastrar).toBeDisabled();

//     userEvent.type(domElements.nameInput, validName);
//     userEvent.type(domElements.emailInput, invalidEmail);
//     userEvent.type(domElements.passwordInput, validPassword);
//     expect(domElements.buttonCadastrar).toBeDisabled();
//   });

//   it('Password menor do que 6 caracteres | Não possível realizar login', () => {
//     const invalidPassword = validPassword.substr(0, MIN_PASSWORD_LENGHT - 1);
//     expect(domElements.buttonCadastrar).toBeDisabled();

//     userEvent.type(domElements.nameInput, validName);
//     userEvent.type(domElements.emailInput, validEmail);
//     userEvent.type(domElements.passwordInput, invalidPassword);
//     expect(domElements.buttonCadastrar).toBeDisabled();
//   });

//   it('Email padrão @dominio.com e password maior que 6 caracteres', () => {
//     expect(domElements.buttonCadastrar).toBeDisabled();

//     userEvent.type(domElements.nameInput, validName);
//     userEvent.type(domElements.emailInput, validEmail);
//     userEvent.type(domElements.passwordInput, validPassword);
//     expect(domElements.buttonCadastrar).not.toBeDisabled();
//   });
// });
