import React from 'react';
import { Link } from 'react-router-dom';

export default function DeliveryForm() {
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select name="seller" data-testid="customer_checkout__select-seller">
            <option value="">Teste</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            name="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <Link to="/customer/orders/:id">
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            FINALIZAR PEDIDO
          </button>
        </Link>
      </form>
    </div>
  );
}
