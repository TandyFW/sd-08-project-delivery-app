import styled from 'styled-components';

export const Container = styled.ul`background-color: #abd1c6;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const LeftItem = styled.li`background-color: #e16162;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;

  button {
    background-color: #e16162;
    border: none;
    color: #fffffe;
    cursor: pointer;
    font-family: Poppins , sans-serif;
    font-size: 1.2em;
    font-weight: 700;
  }
`;

export const RightItem = styled.li`align-items: center;
  background-color: #e16162;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  color: #fffffe;
  display: flex;
  font-family: Nunito , sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  justify-content: space-between;
  padding: 0 20px;
  text-align: center;
  text-decoration: none;
  width: 260px;

  button {
    background-color: #e16162;
    border: none;
    color: #fffffe;
    cursor: pointer;
    font-family: Poppins , sans-serif;
    font-size: 1.2em;
    font-weight: 700;
  }
`;
