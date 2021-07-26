import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, InputGroup, Button, FormControl } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function ProductCard(props) {
  const { product: { id, name, price, url_image: image } } = props;

  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    if (num <= 0) {
      setNum(num - 1);
    }
  };

  return (
    <Card style={ { width: '18rem' } }>
      <Card.Img
        variant="top"
        src={ image }
        data-prodid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Card.ImgOverlay>
        <Card.Title
          data-prodid={ `customer_products__element-card-price-${id}` }
        >
          { price }
        </Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title
          data-prodid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </Card.Title>
        <InputGroup className="mb-3">
          <Button
            variant="primary"
            onClick={ increaseNum }
            data-prodid={ `customer_products__button-card-add-item-${id}` }
          >
            <AddIcon />
          </Button>
          <FormControl
            type="number"
            value={ num }
            data-prodid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            variant="primary"
            onClick={ decreaseNum }
            data-prodid={ `customer_products__button-card-rm-item-${id}` }
          >
            <RemoveIcon />
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    url_image: PropTypes.string,
  }).isRequired,
};
