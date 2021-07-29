import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { getProductsCarrinho, getUserInfo } from '../../service/getLocalStorage';
export default function DeliveryForm() {
  const [addressUser, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState(0);
  const [seller, setSeller] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const handleChangeAddress = ({ target: { value } }) => {
    setAddress(value);
  }

  const handleNumberAddress = ({ target: { value } }) => {
    setNumberAddress(value);
  }
  // /get/seller
  const handleClickCreateSale = () => {
    const products = getProductsCarrinho();
  }

  const getSeller = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/get/seller',
        headers: {
          authorization: getUserInfo().token,
        },
      });
      console.log('response', response.data);
      setSeller(response.data.seller)
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSeller();
  }, []);
  
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
            onChange={ handleChangeAddress }
            value={ addressUser }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="number"
            name="number"
            value={ numberAddress }
            onChange={ handleNumberAddress }
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
