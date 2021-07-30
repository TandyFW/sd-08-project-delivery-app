import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getProductsCarrinho, getUserInfo } from '../../service/getLocalStorage';

export default function DeliveryForm() {
  const [addressUser, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [sellerAll, setSellerAll] = useState([]);
  const [seller, setSeller] = useState('');
  const [isLoading, setLoading] = useState(true);
  const { totalValue } = useSelector((state) => state.productsReducer);
  const history = useHistory();

  const handleChangeAddress = ({ target: { value } }) => {
    setAddress(value);
  };

  const handleNumberAddress = ({ target: { value } }) => {
    setNumberAddress(value);
  };

  const handleSelectSeller = ({ target: { value } }) => {
    console.log('SELECT SELLER --> ', value);
    setSeller(value);
  };

  const detils = () => {
    const products = getProductsCarrinho();
    const saleDetails = {
      products,
      sellerId: seller,
      deliveryAddress: addressUser,
      deliveryNumber: numberAddress,
      totalPrice: totalValue,
    };
    return saleDetails;
  };

  const handleClickCreateSale = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/register/sale',
        headers: {
          authorization: getUserInfo().token,
        },
        data: detils(),
      });
      const { data } = response;
      console.log(response);
      const { id: idSale } = data;
      history.push(`/customer/orders/${idSale}`);
    } catch (e) {
      console.log(e);
    }
  };

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
      setSellerAll(response.data.seller);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSeller();
  }, []);

  const htmlCollection = () => (
    <>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            value={ seller }
            name="seller"
            data-testid="customer_checkout__select-seller"
            onChange={ handleSelectSeller }
          >
            <option>SELECIONAR VENDEDOR</option>
            { sellerAll.map((el, index) => (
              <option key={ index } value={ el.id }>{ el.name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            placeholder="Endereço"
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
            placeholder="Número"
            value={ numberAddress }
            onChange={ handleNumberAddress }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleClickCreateSale }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );

  return (
    <div>
      { isLoading ? (<p>Loading...</p>)
        : htmlCollection()}
    </div>
  );
}
