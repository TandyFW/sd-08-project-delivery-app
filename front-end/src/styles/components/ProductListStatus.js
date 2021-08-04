import styled from 'styled-components';
import ListHeader from './List/ListHeader';
import RequestStatusTag from '../../components/RequestStatusTag';
import { ButtonPrimary, ButtonSecondary } from './Input/Button';

export const StyledProductListHeader = styled(ListHeader)`
  align-items: center;
  background-color: rgba(234, 241, 239, 1);
  display: flex;
  padding: 8px;

  > * {
    display: flex;
    font-size: 1rem;
    justify-content: center;
  }

  > *:not( :last-child ) {
    margin-right: 15px;
  }
`;

export const Item = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const DateContainer = styled.p`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 5px 20px;
`;

export const Description = styled.p`
  flex: 1;
  font-size: 1.4rem;
  justify-content: flex-start;
`;

export const StatusTag = styled(RequestStatusTag)`
  font-size: 1.4rem;
  padding: 5px 20px;
  text-transform: capitalize;
`;

export const ListButtonPrimary = styled(ButtonPrimary)`
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 5px 20px;
`;

export const ListButtonSecondary = styled(ButtonSecondary)`
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 5px 20px;
`;

export const Spacer = styled.div`
  flex: 1;
`;
