import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
  const prefix = 'common_register__';

  return (
    <>
      <h3>Cadastro</h3>
      <fieldset>
        <Input
          label="Nome"
          datatestid={ `${prefix}input-name` }
        />
        <Input
          label="Email"
          datatestid={ `${prefix}input-email` }
        />
        <Input
          label="Senha"
          datatestid={ `${prefix}input-password` }
        />
        <Button
          label="CADASTRAR"
          datatestid={ `${prefix}button-register` }
        />
      </fieldset>
    </>
  );
};

export default Register;
