import React from 'react';
import userEvent from '@testing-library/user-event';
import { internet } from 'faker/locale/pt_BR';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const domElements = {};

beforeEach(() => {
  const rtl = renderWithRouter(<App />);
  domElements.emailInput = rtl.getByTestId(/common_login__input-email/);
  domElements.passwordInput = rtl.getByTestId('common_login__input-password');
  domElements.buttonLogin = rtl.getByTestId('common_login__button-login');
  domElements.buttonRegister = rtl.getByTestId('common_login__button-register');
});

describe('Testando página de Login', () => {
  it('Verifica redirecionamento para rota "/login"', () => {
    const rtl = renderWithRouter(<App />);
    expect(rtl.history.location.pathname).toBe('/login');
  });

  it('Verifica elementos na tela', () => {
    expect(domElements.emailInput).toBeInTheDocument();
    expect(domElements.passwordInput).toBeInTheDocument();
    expect(domElements.buttonLogin).toBeInTheDocument();
    expect(domElements.buttonRegister).toBeInTheDocument();
  });
});

describe('Testando formulário de Login', () => {
  let validEmail;
  let validPassword;
  const MIN_PASSWORD_LENGHT = 6;
  beforeEach(() => {
    validEmail = internet.email();
    validPassword = internet.password(MIN_PASSWORD_LENGHT);
  });

  it('Email fora do padrão @dominio.com | Não possível realizar login', () => {
    const invalidEmail = validEmail.replace('.', ',');
    // const rtl = renderWithRouter(<App />);
    expect(domElements.buttonLogin).toBeDisabled();

    userEvent.type(domElements.emailInput, invalidEmail);

    userEvent.type(domElements.passwordInput, validPassword);
    expect(domElements.buttonLogin).toBeDisabled();
  });

  it('Password maior do que 6 caracteres | Não possível realizar login', () => {
    const invalidPassword = validPassword.substr(0, MIN_PASSWORD_LENGHT - 1);
    // const rtl = renderWithRouter(<App />);
    expect(domElements.buttonLogin).toBeDisabled();

    userEvent.type(domElements.emailInput, validEmail);

    userEvent.type(domElements.passwordInput, invalidPassword);
    expect(domElements.buttonLogin).toBeDisabled();
  });

  it('Email padrão @dominio.com e password maior que 6 caracteres', () => {
    expect(domElements.buttonLogin).toBeDisabled();
    userEvent.type(domElements.emailInput, validEmail);

    userEvent.type(domElements.passwordInput, validPassword);
    expect(domElements.buttonLogin).not.toBeDisabled();
  });
});
