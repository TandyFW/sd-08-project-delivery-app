import styled from 'styled-components';

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 0.5fr;
`;

export const MenuItem = styled.button`
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
  cursor: ${(props) => (props.show ? 'auto' : 'pointer')};
  padding: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${(props) => props.color};
`;
