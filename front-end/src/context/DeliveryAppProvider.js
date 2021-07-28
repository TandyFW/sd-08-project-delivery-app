import React, { useState } from 'react';

import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [] = useState();

  return (
    <DeliveryAppContext.Provider value={
      {

      }
  }
    >
      {children}
    </DeliveryAppContext.Provider>
  );
}

export default DeliveryAppProvider;
