import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CardOrder from '../components/CardOrder';

const Orderer = () => {
  const prefix = 'customer_orders__';

  const [sales, setSales] = useState([]);
  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/customer/orders/${id}`);
  };

  const fetchApi = async () => {
    const { data } = await axios.get('http://localhost:3001/delivery/sales');
    setSales(data);
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <span>oi</span>
      { sales.length > 0 && sales.map(({ id, saleDate, status, totalPrice }) => (
        <div key={ id }>
          <CardOrder
            prefix={ prefix }
            id={ id }
            deliveryStatus={ status }
            orderDate={ saleDate }
            price={ totalPrice }
            onClick={ () => goToDetails(id) }
          />
        </div>
      ))}
    </>
  );
};

export default Orderer;
