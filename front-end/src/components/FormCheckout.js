import React from 'react';

export default function FormCheckout() {
  return (
    <div className="form-checkout-container">
      <h2 className="title-h2">
        Detalhes e Endereço para Entrega
      </h2>
      <form action="" method="POST" id="formCheckout">
        <label htmlFor="checkoutSeller" className="label-form-checkout">
          P. Vendedora Responsável:
          <select
            className="seller-select"
            name="select-seller"
            id="checkoutSeller"
            data-testid="customer_checkout__select-seller"
          >
            {sellers.map((seller) => (
              <option
                className="option-seller"
                value={ seller.name }
                key={ seller.id }
              >
                { seller.name }
              </option>))};
          </select>
        </label>
        <label htmlFor="checkoutAddress" className="label-form-checkout">
          Endereço
          <input
            type="text"
            maxLength="100"
            className="input-address"
            id="checkoutAddress"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="checkoutAddressNumber" className="label-form-checkout">
          Endereço
          <input
            type="text"
            minLength="1"
            maxLength="5"
            className="input-address-number"
            id="checkoutAddressNumber"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </form>
      <button
        type="submit"
        className="btn-form-checkout"
        id="btnCheckout"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
