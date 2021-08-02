import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const StyledSelect = styled.select`
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
