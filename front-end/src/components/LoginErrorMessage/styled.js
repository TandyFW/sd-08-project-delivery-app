import styled from 'styled-components';

const ErrorMessage = styled.div`align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(200, 200, 200, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100vw;
  z-index: 1;

  div {
    background: linear-gradient(rgb(195, 220, 210), white);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    font-weight: 550;
    padding: 20px 30px;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    margin: 5px;
    padding: 10px;
  }

  button {
    align-self: center;
    background: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    margin: 5px;
    padding: 5px 10px;
    width: 100px;
  }
`;

export default ErrorMessage;
