import React from 'react';

import { TextField, Button, FormControl } from '@material-ui/core/';
import { RegisterPage, RegisterForm } from './styled';

function AdminRegister() {
  return (
    <RegisterPage>
      <RegisterForm>
        <TextField
          label="Nome"
          inputProps={ {
            'data-testid': 'admin_manage__input-name',
          } }
        />
        <TextField
          label="Email"
          inputProps={ {
            'data-testid': 'admin_manage__input-email',
          } }
        />
        <TextField
          type="password"
          label="Senha"
          inputProps={ {
            'data-testid': 'admin_manage__input-password',
          } }
        />
        <FormControl>
          <select
            data-testid="admin_manage__select-role"
          >
            <option>
              Vendedor
            </option>
          </select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </Button>
      </RegisterForm>
    </RegisterPage>

  );
}

export default AdminRegister;
