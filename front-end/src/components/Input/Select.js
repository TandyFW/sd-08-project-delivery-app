import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledSelect } from '../../styles/components/Input/Select';

const Select = ({ options, ...props }) => (
  <Wrapper>
    <StyledSelect { ...props }>
      { options.map((option, index) => <option key={ index }>{ option }</option>)}
    </StyledSelect>
  </Wrapper>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
