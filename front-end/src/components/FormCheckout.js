import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import sendOrder from '../services/sendOrder';

export default function FormCheckout() {
  const {
    setSellerId,
    sellerId,
    userId,
    totalPrice,
    itemsList,
    sellers,
    user,
  } = useContext(DeliveryAppContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  // const [saleId, setSaleId] = useState(0);

  const submitOrder = async (e) => {
    e.preventDefault();
    const idSale = await sendOrder({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList: itemsList,
    }, user.token);

    window.location.href = `http://localhost:3000/customer/orders/${idSale}`;
  };

  const selectSeller = () => {
    const currentSellerId = document.querySelector('#checkoutSeller').value;
    // console.log(currentSellerId);
    setSellerId(currentSellerId);
  };

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
            onChange={ selectSeller }
            data-testid="customer_checkout__select-seller"
          >
            <option value="0"> </option>
            {sellers.map((seller) => (
              <option
                className="option-seller"
                value={ seller.id }
                key={ seller.id }
              >
                { seller.name }
              </option>))}
          </select>
        </label>
        <label htmlFor="checkoutAddress" className="label-form-checkout">
          Endereço
          <input
            type="text"
            maxLength="100"
            className="input-address"
            onKeyUp={ () => setDeliveryAddress(document
              .querySelector('#checkoutAddress').value) }
            id="checkoutAddress"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="checkoutAddressNumber" className="label-form-checkout">
          Número
          <input
            type="text"
            minLength="1"
            maxLength="5"
            className="input-address-number"
            onKeyUp={ () => setDeliveryNumber(document
              .querySelector('#checkoutAddressNumber').value) }
            id="checkoutAddressNumber"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </form>
      <button
        type="submit"
        className="btn-form-checkout"
        id="btnCheckout"
        onClick={ (e) => submitOrder(e) }
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>);
}
