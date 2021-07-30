import styled from 'styled-components';

export const CheckoutFormBody = styled.div`align-items: flex-start;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 35px;
  padding: 20px;


  .MuiFormControl-root {
    margin: 10px;
    min-width: 200px;
    width: 30%;
  }

  .MuiFormControl-root:nth-child( 2 ) {
    min-width: 200px;
    width: 40%;
  }

  .MuiFormControl-root:nth-child( 3 ) {
    min-width: 100px;
    width: 20%;
  }

  .MuiButtonBase-root {
    align-self: center;
    background: ${({ theme }) => theme.colors.primary};
    margin: 5px 0;
    min-width: 180px;
    width: 35%;
  }

  .MuiButtonBase-root:hover {
    background: ${({ theme }) => theme.colors.primary};
    filter: brightness(1.2);
  }
`;

export const Form = styled.div`align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
`;
