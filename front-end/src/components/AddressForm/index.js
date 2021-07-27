import React, { useEffect, useState } from 'react';
import api from '../../Apis/api1';

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

export default function AddressForm() {
  const [sellers, setSellers] = useState([]);
  const [message, setMessage] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    number: '',
  });

  useEffect(() => api.getAllSellers().then((response) => setSellers(response)), []);

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
              { sellers ? sellers.map((seller) => (
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
