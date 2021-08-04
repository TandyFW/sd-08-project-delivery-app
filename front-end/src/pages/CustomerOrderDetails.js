import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { loadState } from '../services/LocalStorage';
import { fetchSaleById } from '../services/Api';
import Navbar from '../components/Navbar';
import OrderTableHead from '../components/OrderTableHead';
import CustomerOrderDetailsHeader from '../components/CustomerOrderDetailsHeader';
import OrderTableRow from '../components/OrderTableRow';

//  Examplo de order: {
//   "id": 2,
//   "userId": 3,
//   "sellerId": 2,
//   "totalPrice": "19.60",
//   "deliveryAddress": "rua da cerva",
//   "deliveryNumber": "002",
//   "status": "Pendente",
//   "saleDate": "2021-08-04T20:21:28.000Z",
//   "UserId": 3,
//   "seller": {
//     "id": 2,
//     "name": "Fulana Pereira",
//     "email": "fulana@deliveryapp.com",
//     "role": "seller"
//   },
//   "products": [
//     {
//       "id": 9,
//       "name": "Becks 600ml",
//       "price": "8.89",
//       "urlImage": "http://localhost:3001/images/becks_600ml.jpg",
//       "SalesProducts": {
//         "quantity": 1
//       }
//     },
//     {
//       "id": 10,
//       "name": "Skol Beats Senses 269ml",
//       "price": "3.57",
//       "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg",
//       "SalesProducts": {
//         "quantity": 3
//       }
//     }
//   ]
// }

function CustomerOrderDetails({ match }) {
  const [order, setOrder] = useState([]);
  const { id } = match.params;
  const user = loadState('user');

  const getOrder = async () => {
    setOrder(await (fetchSaleById(id, user.token)));
  };
  useEffect(() => { getOrder(); }, []);

  const { status, seller: { name }, saleDate, products } = order;
  return (
    <>
      <Navbar name={ user.name } />
      <h3>Detalhes do Pedido</h3>
      <div className="order-details-container">
        <CustomerOrderDetailsHeader
          id={ order.id }
          selller={ name }
          date={ saleDate }
          status={ status }
        />
        <table>
          <OrderTableHead />
          <tbody>
            { products
              .map((product, index) => (
                <OrderTableRow key={ product.id } product={ product } index={ index } />
              )) }
          </tbody>
        </table>
        <p>{`Total: R$${order.totalPrice.replace('.', ',')}`}</p>
      </div>
    </>
  );
}

CustomerOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}.isRequired;

export default CustomerOrderDetails;
