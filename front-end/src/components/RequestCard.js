import styled from 'styled-components';
import RequestStatusTag from './RequestStatusTag';

const Wrapper = styled.div`
  background-color: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: inline-flex;
`
const Paragraph = styled.p`
  background-color: rgba(242, 255, 252, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-weight: 700;
  padding: 10px;
  text-align: center;
`

const OrderWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 100px;
`

const OrderLabel = styled.p`
  font-size: 0.65rem;
`

const Body = styled.div`
  display: flex;
`

const PriceDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 5px;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`

const Address = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  justify-content: flex-end;
  padding: 5px 0;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`

const RequestCard = ({ showAddress = false } = {}) => (
  <Wrapper>
    <OrderWrapper>
      <OrderLabel>Pedido</OrderLabel>
      <p>0001</p>
    </OrderWrapper>
    <BodyWrapper>
      <Body>
        <RequestStatusTag status="delivered">Entregue</RequestStatusTag>
        <PriceDataWrapper>
          <Paragraph>DD/MM/AA</Paragraph>
          <Paragraph>RS 01,99</Paragraph>
        </PriceDataWrapper>
      </Body>
      { showAddress && <Address>Meu endereço</Address> }
    </BodyWrapper>
  </Wrapper>
)

export default RequestCard;
