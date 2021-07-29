import styled from 'styled-components';

export const CheckoutFormBody = styled.div`align-items: flex-start;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 35px;


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
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
  }

  .MuiButtonBase-root:hover {
    background: ${({ theme }) => theme.colors.primary};
    filter: brightness(1.2);
  }
`;

export const Form = styled.div`align-items: flex-end;
  background: gainsboro;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
`;
