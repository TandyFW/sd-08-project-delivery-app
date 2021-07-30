import { Box, Button, ButtonGroup, Input } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function QuantitySelector(props) {
  const { setCount, count, id } = props;
  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup
        variant="contained"
        color="primary"
      >
        <Button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => {
            if (count > 0) {
              setCount(Number(count) - 1);
            }
          } }
        >
          -

        </Button>
        <Input
          value={ count }
          type="number"
          max-width="3"
          inputProps={ { 'data-testid': `customer_products__input-card-quantity-${id}` } }
          onChange={ (e) => { setCount(e.target.value); } }
        />
        <Button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => { setCount(Number(count) + 1); } }
        >
          +

        </Button>
      </ButtonGroup>
    </Box>
  );
}

QuantitySelector.propTypes = {
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default QuantitySelector;
