import React from 'react';
import Proptypes from 'prop-types';
import { ListGroup, Row, Card, Col } from 'react-bootstrap';

export default function OrderCard(props) {
  const { requests: { id, totalPrice, saleDate, status }, user, children } = props;

  const price = new Intl.NumberFormat('BRL', {
    style: 'currency', currency: 'BRL',
  }).format(totalPrice);
  const date = new Date(saleDate).toLocaleDateString();
  return (
    <Card className="m-2">
      <Row>
        <Col
          data-testid={ `${user}_orders__element-order-id-${id}` }
          className="text-center p-4"
        >
          { id }
        </Col>
        <Col
          data-testid={ `${user}_orders__element-delivery-status-${id}` }
          className="text-center p-4"
        >
          { status }
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">
              { date }
            </ListGroup.Item>
            <ListGroup.Item
              data-testid={ `${user}_orders__element-price-id-${id}` }
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
