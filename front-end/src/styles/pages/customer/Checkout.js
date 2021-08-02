import styled from 'styled-components';
import Label from '../../components/Input/Label';
import ListContainer from '../../components/List/ListContainer';

export const CheckoutLabel = styled(Label)`
  font-size: 1rem;
`;

export const OrderButton = styled.button`
  align-self: center;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 20px 90px;
  text-transform: uppercase;
`;

export const Container = styled.main`
  padding: 30px 60px;
`;

export const Section = styled.section`
  margin-bottom: 50px;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  padding: 15px;

  *:not( :last-child ) {
    margin-right: 20px;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
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
