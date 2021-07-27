import React from 'react';

function AddressDetails() {
  return (
    <div className="checkout-container">
      <div className="checkout-container-inputs">
        <div className="select-input">
          <p>P/ Vendedora Responsável:</p>
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
          >
            <option value="seller">FAKE</option>
          </select>
        </div>
        <label htmlFor="adress">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
        </label>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
        className="checkout-btn"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default AddressDetails;
