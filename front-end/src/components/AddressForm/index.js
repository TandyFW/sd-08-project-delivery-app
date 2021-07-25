import React, { useState } from 'react';

import
{ Container,
  Form,
  ContainerDiv,
  Paragraph,
  Title,
  ContainerLabel,
  ContainerAddress,
  ContainerNumber,
  ContainerSelect,
  FinalizeOrder,
  /* InvalidBox, */
} from './Styled';

const mockSellers = [
  { id: 1, name: 'Fulana de tal' },
  { id: 2, name: 'O Silva' },
];

export default function AddressForm() {
  const [message, setMessage] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    number: '',
  });

  const handleAddress = ({ target: { name, value } }) => {
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleClick = async () => {
    setMessage(true);
  };

  return (
    <Container>
      <Form>
        <Title>Detalhes e Endereço para Entrega</Title>
        <ContainerDiv>
          <Paragraph>P. Vendedora Responsável</Paragraph>
          <ContainerLabel htmlFor="sellers">
            <ContainerSelect id="sellers" name="sellers">
              { mockSellers.length > 0 ? mockSellers.map((seller) => (
                <option key={ seller.id }>{ seller.name }</option>
              )) : '' }
            </ContainerSelect>
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Endereço</Paragraph>
          <ContainerLabel htmlFor="street">
            <ContainerAddress
              data-testid="customer_checkout__input-address"
              type="text"
              id="street"
              name="street"
              value={ address.street }
              onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Número</Paragraph>
          <ContainerLabel htmlFor="number">
            <ContainerNumber
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              id="number"
              name="number"
              value={ address.number }
              onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <FinalizeOrder
          data-testid="customer_checkout__button-submit-order"
          type="button"
          disabled={ address.street === '' || address.number === '' }
          onClick={ handleClick }
        >
          FINALIZAR PEDIDO
        </FinalizeOrder>
        { message ? <p>Compra realizada com sucesso!</p> : '' }
      </Form>
    </Container>
  );
}
