import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
  width: 100%;
`;

export const PriceTag = styled.p`
  background-color: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  left: 10px;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
`;

export const Body = styled.div`
  align-items: center;
  background-color: #eaf1ef;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;
