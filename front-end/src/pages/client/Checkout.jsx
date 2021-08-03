import React, { useEffect, useState } from 'react';
import { Button, InputLabel } from '@material-ui/core';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import SelectInput from '../../components/SelectInput';

function Checkout() {
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState();

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

  return (
    <>
      <NavBar />
      <h3>Finalizar Pedido</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          <td>oi</td>
          <td><button type="button">Remover</button></td>
        </tbody>
      </table>
      <h3>Detalhes e Endereço para Entrega</h3>
      <InputLabel id="seller">P. Vendedora Responsável</InputLabel>
      <SelectInput
        labelId="seller"
        options={ sellers }
        data-testid="customer_checkout__select-seller"
        value={ selectedSellers }
        onChange={ ({ target }) => setSelectedSellers(target.value) }
      />
      <option value={ sellers }>{ sellers }</option>
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
      >
        FINALIZAR PEDIDO
      </Button>
    </>
  );
}

export default Checkout;
