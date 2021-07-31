import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.color};
  .inputs {
    display: flex;
    flex-direction: column;
    width: 94%;
    input {
      margin: 10px 0;
      width: 100%;
      padding: 10px;
    }
  }
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  button {
    background-color: teal;
    margin: 10px 0;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    color: white;
    font-size: 15px;
    font-weight: bold;
  }
  .create-account {
    background-color: white;
    border: 1px solid teal;
    color: teal;
  }
`;
export const Button = styled.div``;
