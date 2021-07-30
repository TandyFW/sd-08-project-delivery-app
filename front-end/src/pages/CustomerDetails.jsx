import React from 'react';
import ListItem from '../components/ListItem';
import NavBar from '../components/NavBar';
import colors from '../styles/colors';
import {
  DetailsBar,
  DetailsContainer,
  Container,
  LabelInfo,
  OrderButton,
  ListHeader,
} from '../styles/pages/SellerDetails.styled';

const prefix = 'customer_order_details__';
const user = JSON.parse(localStorage.getItem('user'));

const CustomerDetails = () => (
  <Container>
    <NavBar user={ user.name } />
    <h4>Detalhe do Pedido</h4>
    <DetailsContainer>
      <DetailsBar color={ colors.whitesmoke }>
        <section className="info-order">
          <span>PEDIDO:</span>
          <LabelInfo
            data-testid={ `${prefix}element-order-details-label-order-id` }
          >
            0001
          </LabelInfo>
          <span>VENDEDOR:</span>
          <LabelInfo
            data-testid={ `${prefix}element-order-details-label-seller-name` }
          >
            Fulana Pereira da Silva

          </LabelInfo>
          <LabelInfo
            data-testid={ `${prefix}element-order-details-label-order-date` }
            color={ colors.white }
          >
            27/07/2021
          </LabelInfo>
          <LabelInfo
            data-testid={ `${prefix}element-order-details-label-delivery-status` }
            color={ colors.goldenrod }
          >
            ENTREGUE
          </LabelInfo>
        </section>
        <section className="control-buttons">
          <OrderButton
            data-testid={ `${prefix}button-delivery-check` }
            color={ colors.teal }
          >
            PEPARAR PEDIDO
          </OrderButton>
        </section>
      </DetailsBar>
      <ListHeader>
        <span>Item</span>
        <span>Descrição</span>
        <span>Quantidade</span>
        <span>Valor Unitário</span>
        <span>Sub-total</span>
      </ListHeader>
      <ListItem
        prefix={ prefix }
        index="1"
        description="Skol Lata 250ml"
        quantity="4"
        unitPrice="R$ 2,20"
        totalPrice="R$ 8,80"
      />
      <div className="total-order">
        <strong>TOTAL: R$</strong>
        <LabelInfo data-testid={ `${prefix}element-order-total-price` }>
          23,80
        </LabelInfo>
      </div>
    </DetailsContainer>
  </Container>
);

export default CustomerDetails;
