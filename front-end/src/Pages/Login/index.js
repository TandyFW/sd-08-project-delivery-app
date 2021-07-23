import React from 'react';

import { TextField, Button } from '@material-ui/core/';

import { LoginForm, LoginPage } from './styled';

const Login = () => (
  <LoginPage>
    <div>
      LOGO, alguma mensagem, outra coisa
    </div>
    <LoginForm>
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Senha" />
      <Button variant="contained" color="primary">
        LOGIN
      </Button>
    </LoginForm>
  </LoginPage>

);

export default Login;
