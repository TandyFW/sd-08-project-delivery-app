import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, InputGroup, Button, FormControl } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { GlobalContext } from '../context/GlobalProvider';

export default function ProductCard(props) {
  const { product: { id, name, price, url_image: image } } = props;

  const {
    values: { totalPrice },
    functions: { setTotalPrice },
  } = useContext(GlobalContext);

  const [num, setNum] = useState(0);

  const updateStorage = (value) => {
    const storage = localStorage.getItem('carrinho');
    const newStorage = { ...JSON.parse(storage), [id]: value };
    localStorage.setItem('carrinho', JSON.stringify(newStorage));
  };

  const quantity = ({ target }) => {
    if (num >= 0) {
      const sum = (target.value * price) - (num * price);
      setNum(target.value);
      setTotalPrice(totalPrice + sum);
      updateStorage(target.value);
    }
  };

  const increaseNum = () => {
    setNum(num + 1);
    setTotalPrice(totalPrice + Number(price));
    updateStorage(num + 1);
  };

  const decreaseNum = () => {
    if (num > 0) {
      setNum(num - 1);
      setTotalPrice(totalPrice - Number(price));
      updateStorage(num - 1);
    }
  };

  const cardStyle = {
    height: '5rem',
    width: '10rem',
    // width: '18rem',
  };

  const imgStyle = {
    height: '100%',
  };

  return (
    <Card style={ cardStyle } className="m-2">
      <Card.Img
        style={ imgStyle }
        variant="top"
        src={ image }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Card.ImgOverlay>
        <Card.Title
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.toString().replace('.', ',') }
        </Card.Title>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </Card.Title>
        <InputGroup className="mb-3">
          <Button
            variant="primary"
            onClick={ increaseNum }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            <AddIcon />
          </Button>
          <FormControl
            type="number"
            value={ num }
            onChange={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            variant="primary"
            onClick={ decreaseNum }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
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
