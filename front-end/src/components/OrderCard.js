import React from 'react';
import Proptypes from 'prop-types';
import { ListGroup, Row, Card, Col } from 'react-bootstrap';

export default function OrderCard(props) {
  const { requests: { id, price, salesDate, status } } = props;
  return (
    <Card className="m-2">
      <Row>
        <Col className="text-center p-4">
          { id }
        </Col>
        <Col className="text-center p-4">
          { status }
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">
              { salesDate }
            </ListGroup.Item>
            <ListGroup.Item className="text-center">
              { price }
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
}

OrderCard.propTypes = {
  requests: Proptypes.shape().isRequired,

};
