import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button, Row, Col } from 'react-bootstrap';
import '../styles/orderDetails.css';
import {
  orderNumber,
  disableButton,
  disableButtonPrepar,
  disableButtonDelivery } from '../service/ordersDetailsService';

export default function OrderDetailsComp() {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState('Loading');
  const [saleDate, setSaleDate] = useState('');
  const [seller, setSeller] = useState('');
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const history = useHistory();
  const urlText = history.location.pathname;
  let totalValues = 0;
  const id = urlText.split('s/')[1];
  const roleUser = urlText.split('/')[1];
  const tokenUser = JSON.parse(localStorage.getItem('user')).token;
  const configAxios = {
    headers: { Authorization: tokenUser },
  };
  const prefix = {
    customer: 'customer_order_details__',
    seller: 'seller_order_details__',
  };

  useEffect(() => {
    async function requestOrderById() {
      try {
        const result = await axios.get(`http://localhost:3001/${roleUser}/orders/${id}`, configAxios);
        setOrder(result.data.result.products);
        const data = new Date(result.data.result.salesDate).toLocaleDateString('pt-br');
        setSaleDate(data);
        setStatus(result.data.result.status);
        setSeller(result.data.user.name);
        setLoading(false);
      } catch (err) {
        setError('Not Found!');
      }
    }
    requestOrderById();
  }, [id, loading, status, roleUser, configAxios]);

  const totalValue = (value) => {
    totalValues = parseFloat(value) + parseFloat(totalValues);
    return null;
  };

  const conditionUser = () => {
    if (roleUser === 'seller') return false;
    return (
      <Col data-testid={ `${prefix[roleUser]}element-order-details-label-seller-name` }>
        { ' ' }
        {seller}
      </Col>
    );
  };

  const requestStatus = async (value) => {
    try {
      await axios.put(`http://localhost:3001/${roleUser}/orders/${id}`, {
        status: value,
      }, configAxios);
      setStatus(value);
    } catch (e) {
      console.log(e);
    }
  };

  const conditionUserButton = () => {
    if (roleUser === 'seller') {
      return (
        <>
          <Button
            type="submit"
            variant="success"
            size="sm"
            data-testid={ `${prefix[roleUser]}button-preparing-check` }
            onClick={ () => requestStatus('Preparando') }
            disabled={ disableButtonPrepar(status) }
          >
            PREPARAR PEDIDO
          </Button>
          <Button
            type="submit"
            variant="success"
            size="sm"
            data-testid={ `${prefix[roleUser]}button-dispatch-check` }
            onClick={ () => requestStatus('Em Trânsito') }
            disabled={ disableButtonDelivery(status) }
          >
            SAIU PARA ENTREGA
          </Button>
        </>
      );
    }
    return (
      <Button
        type="submit"
        variant="success"
        size="sm"
        data-testid={ `${prefix[roleUser]}button-delivery-check` }
        onClick={ () => requestStatus('Entregue') }
        disabled={ disableButton(status) }
      >
        MARCAR COMO ENTREGUE
      </Button>
    );
  };

  const renderDetails = () => (
    <Table size="lg">
      <thead className="text-center">
        <tr>
          <th>
            PEDIDO:
            { ' ' }
            {id.padStart(orderNumber(id), '0')}
          </th>
          <th>{ conditionUser() }</th>
          <th>{saleDate}</th>
          <th>{status}</th>
          <th>{ conditionUserButton() }</th>
        </tr>
      </thead>
    </Table>
  );

  const renderTable = () => (
    <Table striped bordered hover size="lg">
      <thead className="text-center">
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
        </tr>
      </thead>
      <tbody className="text-center">
        { order.map((elem, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `${prefix[roleUser]}element-order-table-item-number-${elem.id}`
              }
            >
              {elem.id}
            </td>
            <td
              data-testid={ `${prefix[roleUser]}element-order-table-name-${elem.id}` }
            >
              {elem.name}
            </td>
            <td
              className="quantity"
              data-testid={ `${prefix[roleUser]}element-order-table-quantity-${elem.id}` }
            >
              {elem.salesProducts.quantity}
            </td>
            <td
              className="value"
              data-testid={
                `${prefix[roleUser]}element-order-table-unit-price-${elem.id}`
              }
            >
              R$
              {' '}
              {elem.price.replace('.', ',')}
            </td>
            <td
              className="subtotal"
              data-testid={
                `${prefix[roleUser]}element-order-table-sub-total-${elem.id}`
              }
            >
              R$
              {' '}
              {(elem.salesProducts.quantity * elem.price).toFixed(2).replace('.', ',')}
            </td>
            {
              totalValue(parseFloat(elem.salesProducts.quantity * elem.price).toFixed(2))
            }
          </tr>
        ))}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td
            className="justify"
            data-testid={ `${prefix[roleUser]}element-order-total-price` }
          >
            Total: R$
            { totalValues.toFixed(2).replace('.', ',') }
          </td>
        </tr>
      </tfoot>
    </Table>
  );

  const renderError = () => <span>{error}</span>;

  const render = () => (
    <>
      <h4>Detalhe do Pedido</h4>
      <Row>{renderDetails()}</Row>
      <Row>{renderTable()}</Row>
    </>
  );

  return (
    <div>
      { loading ? renderError() : render() }
    </div>
  );
}
