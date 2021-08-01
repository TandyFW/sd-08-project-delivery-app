import React, { useEffect, useState, useContext } from 'react';
import Context from '../../context/Context';

function SellerDetailPage(props) {
  const { userData } = useContext(Context);
  const [order, setOrder] = useState([]);
  console.log('Detalhes', order[0]);
  // eslint-disable-next-line react/prop-types
  const { match: { params: { id } } } = props;
  console.log(id);

  useEffect(() => {
    async function getData() {
      const myInit = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: userData.token,
        },
      };
      await fetch(`http://localhost:3001/order/${id}`, myInit)
        .then((response) => console.log(response) || response.json())
        .then((data) => setOrder(data.sale))
        .catch((err) => console.log(err));
    }
    getData();
  }, [id, userData.token]);

  if (!order[0]) return <h1>Sem produtos</h1>;

  return (
    <div className="main-wrapper-table">
      <table className="checkout-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {order[0].salesProducts.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {element.product.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {element.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {element.product.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { (Number(element.quantity) * Number(element.product.price)).toFixed(2)
                  .replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4
        data-testid="customer_checkout__element-order-total-price"
      >
        Total Price
        {' '}
        {order[0].totalPrice}
      </h4>
    </div>
  );
}

export default SellerDetailPage;
