import React from 'react';

function AddressDetails() {
  return (
    <div className="checkout-container">
      <div className="checkout-container-inputs">
        <div className="select-input">
          <p>P/ Vendedora Responsável:</p>
          <select name="seller">
            <option value="seller">FAKE</option>
          </select>
        </div>
        <label htmlFor="adress">
          Endereço:
          <input type="text" />
        </label>
        <label htmlFor="number">
          Número:
          <input type="text" />
        </label>
      </div>
      <button className="checkout-btn" type="button">FINALIZAR PEDIDO</button>
    </div>
  );
}

export default AddressDetails;
