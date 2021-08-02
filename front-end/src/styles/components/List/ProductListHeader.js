import styled from 'styled-components';
import ListHeader from './ListHeader';

export const StyledProductListHeader = styled(ListHeader)`
  > * {
    display: flex;
    flex-basis: 130px;
    font-size: 1rem;
    justify-content: center;
  }
`;

export const Item = styled.p`
  flex-basis: 70px;
`;

export const Description = styled.p`
  flex: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const Remover = styled.p`
  flex-basis: 170px;
`;
