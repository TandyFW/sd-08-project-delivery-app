import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import getSale from '../services/requestFunctions';

const prefix = 'customer_order_details__';

const CustomerDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const [sale, setSale] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSale.getSale(id)
      .then((response) => setSale(response))
      .then(() => setLoading(false));
  }, [id]);
  return (
    <Container>
      <NavBar user={ user.name } />
      <h4>Detalhe do Pedido</h4>
      {!loading && (
        <DetailsContainer>
          <DetailsBar color={ colors.whitesmoke }>
            <section className="info-order">
              <span>PEDIDO:</span>
              <LabelInfo
                data-testid={ `${prefix}element-order-details-label-order-id` }
              >
                {sale.id}
              </LabelInfo>
              <span>VENDEDOR:</span>
              <LabelInfo
                data-testid={ `${prefix}element-order-details-label-seller-name` }
              >
                {sale.seller.name}
              </LabelInfo>
              <LabelInfo
                data-testid={ `${prefix}element-order-details-label-order-date` }
                color={ colors.white }
              >
                {new Date(sale.sale_date).toLocaleString('pt-br').split(' ')[0]}
              </LabelInfo>
              <LabelInfo
                data-testid={ `${prefix}element-order-details-label-delivery-status` }
                color={ colors.goldenrod }
              >
                {sale.status}
              </LabelInfo>
            </section>
            <section className="control-buttons">
              <OrderButton
                disabled
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
          {sale.products.map((product, index) => (
            <ListItem
              key={ index + 1 }
              prefix={ prefix }
              index={ index + 1 }
              description={ product.name }
              quantity={ product.salesProducts.quantity }
              unitPrice={ product.price }
              totalPrice={
                product.salesProducts.quantity * Number(product.price)
              }
            />
          ))}
          <div className="total-order">
            <strong>TOTAL: R$</strong>
            <LabelInfo data-testid={ `${prefix}element-order-total-price` }>
              {sale.total_price.replace('.', ',')}
            </LabelInfo>
          </div>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default CustomerDetails;
