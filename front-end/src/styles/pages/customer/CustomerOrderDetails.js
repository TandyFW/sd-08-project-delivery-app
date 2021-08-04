import styled from 'styled-components';
import ListContainer from '../../../components/List/ListContainer';

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Container = styled.main`
  padding: 30px 60px;
`;

export const Section = styled.section`
  margin-bottom: 50px;
`;

export const ProductResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  > *:not( :last-child ) {
    margin-bottom: 8px;
  }
`;

export const ProductListContainer = styled(ListContainer)`
  padding-bottom: 100px;
`;

export const TotalValue = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  bottom: 10px;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
  position: absolute;
  right: 10px;
`;
