import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from '../components/ListItem';
import NavBar from '../components/NavBar';
import colors from '../styles/colors';
import dateFormat from '../services/dateFormat';
import orderFormat from '../services/orderFormat';
import {
  DetailsBar,
  DetailsContainer,
  Container,
  LabelInfo,
  OrderButton,
  ListHeader,
} from '../styles/pages/SellerDetails.styled';

const user = JSON.parse(localStorage.getItem('user'));

const prefix = 'seller_order_details__';

const SellerDetails = () => {
  const [saleDetail, setSaleDetail] = useState();
  const ORDER_LENGTH = 4;

  const fetchApi = async () => {
    const { pathname } = window.location;
    const pathId = pathname.split('/').pop();
    const { data } = await axios.get(`http://localhost:3001/delivery/sales/${pathId}`, {
      headers: {
        authorization: user.token,
      } });
    console.log(data);
    setSaleDetail(data);
  };

  const updateStatus = async (status, id) => {
    const { data } = await axios.put(`http://localhost:3001/delivery/sales/${id}`, {
      headers: {
        authorization: user.token,
      },
      data: {
        status,
      },
    });
    console.log(data);
    setSaleDetail(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <NavBar user={ user.name } show />
      <h4>Detalhe do Pedido</h4>
      <DetailsContainer>
        <DetailsBar color={ colors.whitesmoke }>
          <section className="info-order">
            <span>PEDIDO:</span>
            <LabelInfo
              data-testid={ `${prefix}element-order-details-label-order-id` }
            >
              {saleDetail && orderFormat(saleDetail.id, ORDER_LENGTH)}
            </LabelInfo>
            <LabelInfo
              data-testid={ `${prefix}element-order-details-label-order-date` }
              color={ colors.white }
            >
              {saleDetail && dateFormat(saleDetail.sale_date)}
            </LabelInfo>
            <LabelInfo
              data-testid={ `${prefix}element-order-details-label-delivery-status` }
              color={ colors.goldenrod }
            >
              {saleDetail && saleDetail.status}
            </LabelInfo>
          </section>
          <section className="control-buttons">
            <OrderButton
              data-testid={ `${prefix}button-preparing-check` }
              color={ colors.mediumseagreen }
              disabled={ saleDetail && !saleDetail.status === 'Pendente' }
              onClick={ () => updateStatus('Preparando', saleDetail.id) }
            >
              PEPARAR PEDIDO
            </OrderButton>
            <OrderButton
              data-testid={ `${prefix}button-dispatch-check` }
              color={ colors.teal }
              disabled={ saleDetail && !saleDetail.status === 'Preparando' }
              onClick={ () => updateStatus('Em Trânsito', saleDetail.id) }
            >
              SAIU PARA ENTREGA
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
        {saleDetail && saleDetail.products.map(({ id, name, price, salesProducts }) => (
          <ListItem
            key={ id }
            prefix={ prefix }
            index={ id }
            description={ name }
            quantity={ salesProducts.quantity }
            unitPrice={ price }
            totalPrice={ price * salesProducts.quantity }
          />
        ))}
        <div className="total-order">
          <strong>TOTAL: R$</strong>
          <LabelInfo data-testid={ `${prefix}element-order-total-price` }>
            {saleDetail && saleDetail.total_price.replace('.', ',')}
          </LabelInfo>
        </div>
      </DetailsContainer>
    </Container>
  );
};

export default SellerDetails;
