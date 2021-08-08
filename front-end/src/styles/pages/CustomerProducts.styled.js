import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

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
export const CartButton = styled.button`
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    transition: all 0.5s;
  }
  .cart-icon {
    font-size: 20px;
  }
  span {
    font-size: 16px;
    margin-right: 10px;
    margin-left: 10px;
  }
  margin: 10px;
  min-width: 200px;
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
