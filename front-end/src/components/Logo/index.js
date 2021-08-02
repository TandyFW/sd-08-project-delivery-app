import React from 'react';

import LogoContent from './styled';
import logo from '../../images/BiritaDelivery.gif';

function Logo() {
  return (
    <LogoContent>
      <img src={ logo } alt="logo" />
    </LogoContent>
  );
}

export default Logo;
