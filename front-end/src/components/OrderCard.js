import React from 'react';
import Proptypes from 'prop-types';
import { ListGroup, Row, Card, Col } from 'react-bootstrap';

export default function OrderCard(props) {
  const { requests: { id, totalPrice, saleDate, status }, user, children } = props;

  const deliveryStatus = new Map([
    ['Pendente', 'bg-warning text-dark rounded'],
    ['Preparando', 'bg-info text-white rounded'],
    ['Em transito', 'bg-warning text-dark rounded'],
    ['Entregue', 'bg-success text-white rounded'],
  ]);

  const price = new Intl.NumberFormat('BRL', {
    style: 'currency', currency: 'BRL',
  }).format(totalPrice);
  const date = new Date(saleDate).toLocaleDateString();
  return (
    <Card style={ { width: '21rem' } } className="m-2">
      <Row>
        <Col
          style={ { width: '21rem' } }
          data-testid={ `${user}_orders__element-order-id-${id}` }
          className="text-center p-4"
        >
          { id }
        </Col>
        <Col
          data-testid={ `${user}_orders__element-delivery-status-${id}` }
          className={ `text-center m-1 p-4 ${deliveryStatus.get(status)}` }
        >
          { status }
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item
              data-testid={ `${user}_orders__element-order-date-${id}` }
              className="text-center"
            >
              { date }
            </ListGroup.Item>
            <ListGroup.Item
              data-testid={ `${user}_orders__element-card-price-${id}` }
              className="text-center"
            >
              { price }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        { children }
      </Row>
    </Card>
  );
}

OrderCard.propTypes = {
  requests: Proptypes.shape().isRequired,
  user: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,

};
