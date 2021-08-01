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
    return data;
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <span>oi</span>
      { sales.length > 0 && sales.map((sale) => (
        <div key={ sale.id }>
          <CardOrder
            prefix={ prefix }
            id={ sale.id }
            deliveryStatus={ sale.status }
            orderDate={ sale.sale_date }
            price={ sale.total_price }
            onClick={ () => goToDetails(sale.id) }
          />
        </div>
      ))}
    </>
  );
};

export default Orderer;
