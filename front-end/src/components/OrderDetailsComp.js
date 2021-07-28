import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/orderDetails.css';

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
  const prefix = 'customer_order_details__';
  // const ZEROPAD = 4;
  let accTotalPriceValue = 0;

  useEffect(() => {
    async function requestOrderById() {
      try {
        const result = await axios.get(`http://localhost:3001/customer/orders/${id}`);
        setOrder(result.data.result.products);
        console.log(result.data.result.status);
        const data = new Date(result.data.result.salesDate);
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
  }, [id, loading, status]);

  const accTotalPrice = (value) => {
    accTotalPriceValue = value + accTotalPriceValue;
    return null;
  };

  const disableButton = () => {
    if (status === 'Entregue') {
      return true;
    }
    return false;
  };

  const requestStatus = async () => {
    try {
      const result = await axios.put(`http://localhost:3001/customer/orders/${id}`, {
        status: 'Entregue',
      });
      if (result.data.status === 'Entregue') return setStatus(result.data.status);
    } catch (e) {
      console.log(e);
    }
  };

  const orderNumber = () => {
    const lengthMax = 5;
    const result = lengthMax - id.length;
    return result;
  };

  const renderDetails = () => (
    <Row>
      <Col
        className="font-weight-bold rounded bg-success text-black"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        PEDIDO:
        { ' ' }
        {id.padStart(orderNumber(), '0')}
        { ' ' }
      </Col>
      <Col data-testid="customer_order_details__element-order-details-label-order-date">
        P. Vend:
        { ' ' }
        {seller}
      </Col>
      <Col
        className="font-weight-bold rounded bg-secondary text-black"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { ' ' }
        {saleDate}
        { ' ' }
      </Col>
      <Col
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { ' ' }
        {status}
      </Col>
      <Col
        className="col-2"
      >
        <Button
          type="submit"
          variant="success"
          size="sm"
          data-testid={ `${prefix}button-delivery-check` }
          onClick={ () => requestStatus() }
          disabled={ disableButton() }
        >
          {' '}
          MARCAR COMO ENTREGUE
        </Button>
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
              data-testid={ `${prefix}element-order-table-item-number-${elem.id}` }
            >
              {elem.id}
            </td>
            <td
              data-testid={ `${prefix}element-order-table-name-${elem.id}` }
            >
              {elem.name}
            </td>
            <td
              className="quantity"
              data-testid={ `${prefix}element-order-table-quantity-${elem.id}` }
            >
              {elem.salesProducts.quantity}
            </td>
            <td
              className="value"
              data-testid={ `${prefix}element-order-table-unit-price-${elem.id}` }
            >
              R$
              {' '}
              {elem.price}
            </td>
            <td
              className="subtotal"
              data-testid={ `${prefix}element-order-table-sub-total-${elem.id}` }
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
              data-testid={ `${prefix}element-order-total-price` }
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
    <span>
      {' '}
      {error}
      {' '}
    </span>
  );
    // Container
    // row
  const render = () => (
    <div>
      Detalhe do Pedido
      <Container>
        {renderDetails()}
        <Row>
          {renderTable()}
        </Row>
      </Container>
    </div>
  );

  return (
    <div>
      { loading ? renderError() : <div>{ render() }</div> }
    </div>
  );
}
