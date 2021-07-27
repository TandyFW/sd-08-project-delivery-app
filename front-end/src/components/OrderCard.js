import React from 'react';
import Proptypes from 'prop-types';
import { ListGroup, Row, Card, Col } from 'react-bootstrap';

export default function OrderCard(props) {
  const { requests: { id, price, salesDate, status }, user, children } = props;
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
          data-testid={ `${user}_orders__element-order-status-${id}` }
          className="text-center p-4"
        >
          { status }
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">
              { salesDate }
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
  user: Proptypes.string().isRequired,
  children: Proptypes.element().isRequired,

};
