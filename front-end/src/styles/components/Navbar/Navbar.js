import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
`;

export const Username = styled.p`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: white;
  font-size: 1.5rem;
  margin-left: auto;
  padding: 20px;
`;

export const Exit = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 20px;
`;

export const ChildrenWrapper = styled.div`
  display: flex;

  > * {
    align-items: center;
    color: white;
    display: flex;
    font-weight: 700;
    justify-content: center;
    padding: 20px;
    text-transform: uppercase;
  }
`;
