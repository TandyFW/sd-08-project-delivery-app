import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  &:after {
    border-color: black transparent transparent;
    border-style: solid;
    border-width: 10px 6px;
    content: '';
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 45%;
    z-index: -1;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  background-color: white;
  border: 1px solid #001813;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  min-width: 300px;
  /* padding: 10px 40px 10px 10px; */
  padding: 15px;
  width: 100%;

  option {
    padding: 10px;
  }
`;

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
