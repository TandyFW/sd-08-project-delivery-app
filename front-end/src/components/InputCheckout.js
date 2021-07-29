import React from 'react';

function InputCheckout() {
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <legend
          id="select-seller"
        >
          P. vendedora responsável
        </legend>
        <select
          id="select-seller"
          data-testid="customer_checkout__select-seller"
        ></select>
        <legend
          id="input-address"
        >
          Endereço
        </legend>
        <input
          type="text"
          id="input-address"
          data-testid="customer_checkout__input-address"
        />
        <legend
          id="input-number"
        >
          Número
        </legend>
        <input
          type="text"
          id="input-number"
          data-testid="customer_checkout__input-addressNumber"
        />
      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  )
  
}

export default InputCheckout;