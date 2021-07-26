import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './styled';

const LoginErrorMessage = ({ disableMessage }) => (
  <ErrorMessage
    data-testid="common_login__element-invalid-email"
  >
    <div>
      <p>Usuário não cadastrado</p>
      <button
        type="button"
        onClick={ () => disableMessage(false) }
      >
        Ok
      </button>
    </div>
  </ErrorMessage>
);

LoginErrorMessage.propTypes = {
  disableMessage: PropTypes.func.isRequired,
};

export default LoginErrorMessage;
