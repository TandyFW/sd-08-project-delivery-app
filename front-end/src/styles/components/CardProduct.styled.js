import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;
export const ProductImage = styled.img`
  margin: auto;
  max-width: 90%;
  max-height: 90%;
  background-color: ${(props) => props.color};
`;
export const ProductPrice = styled.span`
  float: left;
  margin: 10px;
  font-weight: bold;
`;

export const ControlArea = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.color};
`;
export const QtdController = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProductDescription = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  margin: 10px;
  color: rgb(31, 53, 48);
`;
export const QtdButton = styled.button`
  cursor: pointer;
  color: white;
  font-size: 20px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${(props) => props.color};
`;
export const QtdInput = styled.input`
  border: none;
  text-align: center;
  width: 50px;
`;
