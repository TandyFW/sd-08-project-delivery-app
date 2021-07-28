import styled from 'styled-components';

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 0.5fr;
`;

export const MenuItem = styled.button`
  cursor: ${(props) => (props.show ? 'auto' : 'pointer')};
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${(props) => props.color};
`;
