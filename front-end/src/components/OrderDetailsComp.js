import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
  const id = urlText.split('s/')[1];
  const roleUser = urlText.split('/')[1];
  let accTotalPriceValue = 0;
  const tokenUser = JSON.parse(localStorage.getItem('user')).token;
  const configAxios = {
    headers: { Authorization: tokenUser },
  };
  const prefix = {
    customer: 'customer_order_details__',
    seller: 'seller_orders__',
  };

  useEffect(() => {
    async function requestOrderById() {
      try {
        const result = await axios.get(`http://localhost:3001/${roleUser}/orders/${id}`, configAxios);
        setOrder(result.data.result.products);
        const data = new Date(result.data.result.saleDate);
        const daForm = (`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
        setSaleDate(daForm);
        setStatus(result.data.result.status);
        setSeller(result.data.user.name);
        setLoading(false);
      } catch (err) {
        setError('Not Found!');
      }
    }
    requestOrderById();
  }, [id, loading, status, roleUser]);

  const accTotalPrice = (value) => {
    accTotalPriceValue = value + accTotalPriceValue;
    return null;
  };

  const conditionUser = () => {
    if (roleUser === 'seller') return false;
    return (
      <Col data-testid={ `${prefix[roleUser]}element-order-details-label-order-date` }>
        P. Vend:
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
    <Row>
      <Col
        className="font-weight-bold rounded bg-success text-black"
        data-testid={ `${prefix[roleUser]}element-order-details-label-order-id` }
      >
        PEDIDO:
        { ' ' }
        {id.padStart(orderNumber(id), '0')}
        { ' ' }
      </Col>
      { conditionUser() }
      <Col
        className="font-weight-bold rounded bg-secondary text-black"
        data-testid={ `${prefix[roleUser]}element-order-details-label-seller-name` }
      >
        {saleDate}

      </Col>
      <Col
        data-testid={ `${prefix[roleUser]}element-order-details-label-delivery-status` }
      >
        {status}
      </Col>
      <Col
        className="col-2"
      >
        { conditionUserButton() }
      </Col>
    </Row>
  );

  const renderTable = () => {
    const result = order.map((elem, index) => (
      <Table striped bordered hover size="lg" key={ elem.id }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
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
              {elem.price}
            </td>
            <td
              className="subtotal"
              data-testid={
                `${prefix[roleUser]}element-order-table-sub-total-${elem.id}`
              }
            >
              R$
              {' '}
              {(elem.salesProducts.quantity * elem.price).toFixed(2)}
            </td>
          </tr>
          {
            accTotalPrice(parseFloat(elem.salesProducts.quantity * elem.price).toFixed(2))
          }
        </tbody>
        <tbody>
          <tr>
            <td
              className="justify"
              data-testid={ `${prefix[roleUser]}element-order-total-price` }
            >
              Total: R$
              { ' ' }
              { parseFloat(accTotalPriceValue).toFixed(2) }
            </td>
          </tr>
        </tbody>
      </Table>
    ));
    return result;
  };

  const renderError = () => (
    <span>{error}</span>
  );

  const render = () => (
    <div>
      Detalhe do Pedido
      <Container>
        {renderDetails()}
        <Row>{renderTable()}</Row>
      </Container>
    </div>
  );

  return (
    <div>
      { loading ? renderError() : <div>{ render() }</div> }
    </div>
  );
}
