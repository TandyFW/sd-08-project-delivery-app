import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 15px;
  text-transform: uppercase;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
`;

export const ButtonTertiary = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
