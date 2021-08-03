import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarSeller from './NavbarSeller';
import { useHistory } from 'react-router-dom';

function SellerProductCard() {
  const [listSales, setListSales] = useState([]);
  const history = useHistory();

  const userStorage = JSON.parse(localStorage.getItem('user'));
  useEffect(async () => {
      const product = await axios.post('http://localhost:3001/seller/orders', {
        name: userStorage.name,
      })
        .then((data) => data.data)
        .catch((err) => console.log(err));
      
      setListSales(product);    
  }, []);

  return(
    <div>
      <NavbarSeller nome={ userStorage.name } />
      { listSales.map((data, index) => {
        return (
          <button
            onClick={() => history.push(`/seller/orders/${ data.id }`)}
            key={ index }
          >
            <ul>
              <li
                data-testid={`seller_orders__element-order-id-${ data.id }`}
              >
                Pedido: { data.id }
              </li>
              <li
                data-testid={`seller_orders__element-delivery-status-${ data.id }`}
              >
                { data.status }
              </li>
              <li
                data-testid={`seller_orders__element-order-date-${ data.id }`}
              >{ data.saleDate }</li>
              <li
                data-testid={`seller_orders__element-card-price-${ data.id }`}
              >
                { data.totalPrice }
              </li>
              <li
                data-testid={`seller_orders__element-card-address-${ data.id }`}
              >
                { data.deliveryAddress }, { data.deliveryNumber }
              </li>
            </ul>
          </button>
        )
      }) }
    </div>
  );
}

export default SellerProductCard;
