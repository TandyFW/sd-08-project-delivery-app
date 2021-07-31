import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Table from '../components/Table';
import Select from '../components/Select';

function ClientCheckout() {
  const prefix = 'customer_checkout__';
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSellectedSeller] = useState('');
  const currUser = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const products = useSelector((state) => state.products.products);
  let total = useSelector((state) => state.products.products);
  total = total.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qtd),
    0,
  );

  const fetchAPI = async () => {
    const { data } = await axios.get('http://localhost:3001/delivery/sellers');
    const sellerAPI = data.reduce(
      (acc, curr) => [...acc, { name: curr.name, id: curr.id }],
      [''],
    );
    setSellers(sellerAPI);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const finishSale = async () => {
    try {
      const fixedTotal = total.toFixed(2);
      const dateStorage = {
        totalPrice: fixedTotal,
        deliveryAddress: address,
        deliveryNumber: number,
        sellerId: selectedSeller,
        products,
      };
      console.log(dateStorage);
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:3001/delivery/sales',
        headers: {
          authorization: currUser.token,
        },
        data: {
          total_price: fixedTotal,
          delivery_address: address,
          delivery_number: number,
          sellerId: selectedSeller,
          products,
        },
      });
      history.push(`/customer/orders/${data.id}`);
    } catch (error) {
      console.log('falha ao chamar api');
    }
  };

  return (
    <>
      <NavBar user={ currUser.name || 'Fulano' } />
      <h3>Finalizar Pedido</h3>
      <Table />
      <span data-testid={ `${prefix}element-order-total-price` }>
        {total.toFixed(2).replace('.', ',')}
      </span>
      <h3>Detalhes e endereço para Entrega</h3>
      <Select
        label="Vendedor"
        name="SelectSeller"
        options={ sellers }
        onChange={ (e) => setSellectedSeller(e.target.value) }
        value={ selectedSeller }
        datatestid={ `${prefix}select-seller` }
        // placeholder={ placeholder }
      />
      <Input
        label="Endereço"
        onChange={ (e) => setAddress(e.target.value) }
        value={ address }
        datatestid={ `${prefix}input-address` }
        // placeholder={ Endereço }
      />
      <Input
        label="Número"
        onChange={ (e) => setNumber(e.target.value) }
        value={ number }
        datatestid={ `${prefix}input-addressNumber` }
        // placeholder="Número"
      />
      <Button
        type="button"
        onClick={ finishSale }
        datatestid={ `${prefix}button-submit-order` }
        // disabled={ disabled }
        label="Finalizar Pedido"
      />
    </>
  );
}

export default ClientCheckout;
