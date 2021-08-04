import styled from 'styled-components';

export const PriceTag = styled.div`
  position: fixed;
  bottom: 0px;
  right: 20px;
  font-size: 15px;
  width: 350px;
  background-color: #036b52;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: 600;
`;

export const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Container1 = styled.div`
  width: 100%;

  display: ${({ show }) => (show ? 'block' : 'none')};
`;
