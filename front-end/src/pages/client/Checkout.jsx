import React, { useContext, useEffect, useState } from 'react';
import { Button, InputLabel } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import SelectInput from '../../components/SelectInput';
import TableCheckout from '../../components/TableCheckout';
import Context from '../../context/Context';

function Checkout() {
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState();
  const { cartTotal, cart, orderInfo } = useContext(Context);
  const history = useHistory();

  const fetchSellers = async () => {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3001/sellers',
    });
    return setSellers(data);
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const userName = JSON.parse(localStorage.getItem('user')).name;
  const cartPrice = cartTotal.value;
  console.log('oi', cartPrice);
  const price = Number(cartPrice.replace(',', '.')).toFixed(2);
  const { token } = JSON.parse(localStorage.getItem('user'));

  const fetchSale = async () => {
    const cartProducts = cart.value
      .filter(({ quantity }) => quantity > 0)
      .map(({ id: productId, quantity }) => ({ productId, quantity }));
    console.log('CART_PRODUCTS', cartProducts);
    try {
      const sale = await axios({
        method: 'POST',
        url: 'http://localhost:3001/sales',
        headers: { 'Content-Type': 'application/json', authorization: token },
        data: {
          totalPrice: price,
          address,
          addressNumber,
          name: userName,
          products: JSON.stringify(cartProducts),
        },
      });
      console.log('testeoiiii', sale.data);
      const { id, status, saleDate } = sale.data;
      orderInfo.set([id, saleDate, status]);
      console.log('data', saleDate);
      history.push(`/customer/orders/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <h3>Finalizar Pedido</h3>
      <TableCheckout prefix="customer_checkout__" />
      <span data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${cartTotal.value}`}
      </span>
      <h3>Detalhes e Endereço para Entrega</h3>
      <InputLabel id="seller">P. Vendedora Responsável</InputLabel>
      <SelectInput
        labelId="seller"
        options={ sellers }
        data="customer_checkout__select-seller"
        value={ selectedSellers }
        onChange={ ({ target }) => setSelectedSellers(target.value) }
      />
      <InputLabel htmlFor="address-input">Endereço</InputLabel>
      <input
        id="address-input"
        type="text"
        data-testid="customer_checkout__input-address"
        value={ address }
        onChange={ ({ target }) => setAddress(target.value) }
      />
      <InputLabel htmlFor="number-input">Número</InputLabel>
      <input
        id="number-input"
        type="text"
        data-testid="customer_checkout__input-addressNumber"
        value={ addressNumber }
        onChange={ ({ target }) => setAddressNumber(target.value) }
      />
      <Button
        data-testid="customer_checkout__button-submit-order"
        onClick={ fetchSale }
      >
        FINALIZAR PEDIDO
      </Button>
    </>
  );
}

export default Checkout;
