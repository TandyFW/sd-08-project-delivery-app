import styled from 'styled-components';

export const ProductList = styled.div`
  display: grid;
  margin: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

export const MenuItem = styled.button`
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${(props) => props.color};
`;
