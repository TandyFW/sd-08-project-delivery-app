import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Card,
  ControlArea,
  ProductImage,
  ProductPrice,
  QtdButton,
  QtdController,
  QtdInput,
  ProductDescription,
} from '../styles/components/CardProduct.styled';
import colors from '../styles/colors';

const CardProduct = ({ prefix, price, tumbnail, title, id }) => {
  const [quantity, setQuantity] = useState(0);
  // const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const addItem = (idProduct) => {
    const data = { id: idProduct };
    setQuantity(quantity + 1);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: { data, qtd: quantity + 1 },
    });
  };
  const decreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Card color={ colors.white }>
      <ProductPrice data-testid={ `${prefix}element-card-price-${id}` }>
        R$
        {price.toString().replace('.', ',')}
      </ProductPrice>
      <ProductImage
        data-testid={ `${prefix}img-card-bg-image-${id}` }
        src={ tumbnail }
      />
      <ControlArea color={ colors.whitesmoke }>
        <ProductDescription data-testid={ `${prefix}element-card-title-${id}` }>
          {title}
        </ProductDescription>
        <QtdController>
          <QtdButton
            onClick={ decreaseItem }
            data-testid={ `${prefix}button-card-rm-item-${id}` }
            color={ colors.teal }
          >
            -
          </QtdButton>
          <QtdInput
            data-testid={ `${prefix}input-card-quantity-${id}` }
            type="text"
            onChange={ ({ target }) => setQuantity(target.value) }
            value={ quantity }
          />
          <QtdButton
            onClick={ () => addItem(id) }
            data-testid={ `${prefix}button-card-add-item-${id}` }
            color={ colors.teal }
          >
            +
          </QtdButton>
        </QtdController>
      </ControlArea>
    </Card>
  );
};

CardProduct.propTypes = {
  prefix: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;
