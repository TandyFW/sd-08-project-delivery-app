import React from 'react';

import { TextField, Button } from '@material-ui/core/';

import { LoginForm, LoginPage } from './styled';

const Login = () => (
  <LoginPage>
    <div>
      <p>LOGO, alguma mensagem, outra coisa</p>
    </div>
    <LoginForm>
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Senha" />
      <Button variant="contained" color="primary">
        LOGIN
      </Button>
      <Button variant="contained" color="secondary">
        AINDA NÃO TENHO CONTA
      </Button>
    </LoginForm>
  </LoginPage>

);

export default Login;
