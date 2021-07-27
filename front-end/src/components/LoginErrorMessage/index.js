import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './styled';

const LoginErrorMessage = ({ disableMessage, testId }) => (
  <ErrorMessage
    data-testid={ testId }
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
  testId: PropTypes.string.isRequired,
};

export default LoginErrorMessage;
