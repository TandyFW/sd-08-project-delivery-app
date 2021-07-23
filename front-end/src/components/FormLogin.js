import React from 'react';
import { Redirect } from 'react-router';

export default function FormLogin() {
  const login = () => {
    //
  }

  return (
    <form action='' method='GET' className='form-login'>
      <label htmlFor='login-email' className='login-label'>
        Email:
        <input
          type='email'
          maxLength='30'
          placeholder='Digite aqui seu email'
          className='email-input'
          id='login-email'
          data-testid='common_login__input-email'
        />
      </label>
      <label htmlFor='login-password' className='login-label'>
        Senha:
        <input
          type='password'
          maxLength='30'
          placeholder='Digite aqui sua senha'
          className='password-input'
          id='login-password'
          data-testid='common_login__input-password'
        />
      </label>
      <button
        type='submit'
        className='btn-login'
        id='btn-login'
        onClick={login}
        data-testid='common_login__button-login'
      >
        LOGIN
      </button>
      <button
        type='button'
        className='btn-redirect-register'
        id='btn-redirect-register'
        data-testid='common_login__button-register'
      >
        <Redirect to='/register' />
      </button>
    </form>
  );
}
