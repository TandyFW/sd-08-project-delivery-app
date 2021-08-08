import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import ListItem from '../components/ListItem';
import NavBar from '../components/NavBar';
import api from '../services/api';
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
let socket;

const getSale = async (id) => {
  const result = await api.get(`/delivery/sales/${id}`);
  return result.data;
};
const updateStatus = async (id, status, setFunction) => {
  const { data } = await api({
    method: 'put',
    url: `http://localhost:3001/delivery/sales/${id}`,
    data: {
      status,
    },
  });
  setFunction(data);
  socket.emit('statusUpdate', { status, position: id });
};

const CustomerDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const [sale, setSale] = useState({});
  const [loading, setLoading] = useState(true);
  const socketEndPoint = 'http://localhost:3002';

  useEffect(() => {
    socket = io(socketEndPoint);
    getSale(id)
      .then((response) => setSale(response))
      .then(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    socket.on('statusUpdate', (status) => {
      setSale({ ...sale, status });
    });
  }, [sale]);

  return (
    <Container>
      <NavBar user={ user.name } contextPage="PRODUTOS" />
      <h4>Detalhe do Pedido</h4>
      {!loading && sale.seller && (
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
                disabled={ sale && sale.status !== 'Em Trânsito' }
                onClick={ () => updateStatus(id, 'Entregue', setSale) }
                data-testid={ `${prefix}button-delivery-check` }
                color={ colors.teal }
              >
                PREPARAR PEDIDO
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
            <LabelInfo
              color={ colors.teal }
              data-testid={ `${prefix}element-order-total-price` }
            >
              {sale.total_price.replace('.', ',')}
            </LabelInfo>
          </div>
        </DetailsContainer>
      )}
    </Container>
  );
};

export default CustomerDetails;
