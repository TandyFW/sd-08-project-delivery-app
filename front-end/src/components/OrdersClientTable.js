import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const zeroLeft = -4;

const OrdersClientTable = ({ orders, dataTestPrefix, updateOnClick, status }) => (
  <>
    <div className="OrdersTable">
      {orders.map((item) => (
        <table key={ item.id }>
          <thead>
            <tr>
              <th data-testid={ `${dataTestPrefix}details-label-order-id` }>
                Pedido
                {(`0000 ${item.id}`).slice(zeroLeft)}
              </th>
              <th data-testid={ `${dataTestPrefix}details-label-seller-name` }>
                Pessoa Vend:
                {item.seller.name}
              </th>
              {'  '}
              <th data-testid={ `${dataTestPrefix}details-label-order-date` }>
                {new Date(item.saleDate).toLocaleDateString('pt-BR')}
              </th>
              {'  '}
              <th data-testid={ `${dataTestPrefix}details-label-delivery-status` }>
                {item.status}
              </th>
              {'  '}
              <th>
                <Button
                  name="MARCAR COMO ENTREGUE"
                  testId="customer_order_details__button-delivery-check"
                  disable={ item.status === status[1]
                    || item.status === status[2]
                    || item.status === status[4] }
                  onClick={ () => updateOnClick(item.id, 'Entregue') }
                />
              </th>
            </tr>
          </thead>
        </table>
      ))}
    </div>
    <table className="OrdersData">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => item.products.map((obj, i) => (
          <tr key={ obj.id }>
            <td
              data-testid={ `${dataTestPrefix}table-item-number-${i}` }
              className="tableId"
            >
              {i + 1}
            </td>
            <td
              data-testid={ `${dataTestPrefix}table-name-${i}` }
              className="tableDesc"
            >
              {obj.name}
            </td>
            <td
              data-testid={ `${dataTestPrefix}table-quantity-${i}` }
              className="tableQua"
            >
              {obj.saleProduct.quantity}
            </td>
            <td
              data-testid={ `${dataTestPrefix}table-sub-total-${i}` }
              className="tableVal"
            >
              {obj.price.replace(/\./g, ',')}
            </td>
            <td
              data-testid={ `${dataTestPrefix}total-price-${i}` }
              className="tableTotal"
            >
              {(obj.saleProduct.quantity * obj.price).toFixed(2).replace(/\./g, ',')}
            </td>
          </tr>
        )))}
        <div>
          <h1 data-testid={ `${dataTestPrefix}total-price` }>
            Total: R$
            {' '}
            {orders.map((item) => item.totalPrice.replace(/\./, ','))}
          </h1>
        </div>
      </tbody>
    </table>
  </>
);

OrdersClientTable.propTypes = {
  orders: PropTypes.func.isRequired,
  dataTestPrefix: PropTypes.string.isRequired,
  updateOnClick: PropTypes.func.isRequired,
  status: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default OrdersClientTable;
