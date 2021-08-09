import styled from 'styled-components';

export const Container = styled.div`margin-top: 20px;
`;

export const Form = styled.form`align-items: center;
  background: var(--background);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: auto;
  width: 82%;

  label {
    color: var(--headline);
  }

  input {
    border: none;
    color: var(--headline);
    font-size: 1.2rem;
    padding: 1.5rem;
    width: 22rem;
  }

  select {
    border: none;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    padding: 0.7rem 0.5rem;
  }

  button {
    background: var(--link);
    border: none;
    border-radius: 0.25rem;
    color: var(--form-button-text);
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2.3rem;
    padding: 0.5rem 1rem;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const RegisterMessage = styled.p`background-color: #001e1d;
  border-radius: 5px;
  color: var(--headline);
  font-family: Poppins , monospace;
  font-size: medium;
  font-weight: 600;
  margin-left: 5px;
  padding: 5px 10px;
  position: absolute;
`;
