import React from 'react';
import SellerTable from '../sellerTable/sellerTable';

function DetailsContainer() {
  return (
    <div>
      <div>
        <span>PEDIDO 00001</span>
        <span> 08/04/2021</span>
        <span>PENDENTE</span>
        <button type="button">PREPARAR PEDIDO</button>
        <button type="button">SAIU PARA ENTREGA</button>
      </div>
      <SellerTable />
    </div>
  );
}

export default DetailsContainer;
