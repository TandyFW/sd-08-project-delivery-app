import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledSelect } from '../../styles/components/Input/Select';

const Select = ({ options, ...props }) => (
  <Wrapper>
    <StyledSelect { ...props }>
      { options.map(({ id, name }) => (
        <option key={ id } value={ id }>{ name }</option>))}
    </StyledSelect>
  </Wrapper>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
