import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryAppContext from './DeliveryAppContext';

function DeliveryAppProvider({ children }) {
  const [itemsList, setItemsList] = useState([]);

  return (
    <DeliveryAppContext.Provider
      value={ { itemsList, setItemsList } }
    >
      {children}
    </DeliveryAppContext.Provider>
  );
}

DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryAppProvider;
