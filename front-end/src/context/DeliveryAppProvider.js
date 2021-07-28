import React, { useState } from 'react';

import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [itemsList, setItemsList] = useState([]);

  return (
    <DeliveryAppContext.Provider value={
      {
        itemsList,
        setItemsList,
      }
  }
    >
      {children}
    </DeliveryAppContext.Provider>
  );
}

export default DeliveryAppProvider;
