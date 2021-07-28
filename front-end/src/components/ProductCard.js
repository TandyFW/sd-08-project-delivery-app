import styled from 'styled-components';
import Label from './Label';
import Counter from './Counter';

const Wrapper = styled.div`
  align-items: center;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const PriceTag = styled.p`
  background-color: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  left: 10px;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
`

const Body = styled.div`
  align-items: center;
  background-color: #eaf1ef;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const ProductCard = () => (
  <Wrapper>
    <PriceTag>RS10</PriceTag>
    <Image src="https://picsum.photos/200" />
    <Body>
      <Label text="Quantidade" centered>
        <Counter />
      </Label>
    </Body>
  </Wrapper>
)

export default ProductCard;
