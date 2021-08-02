import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CardOrder from '../components/CardOrder';
import NavBar from '../components/NavBar';
import { Container } from '../styles/pages/Orders.styled';

const Orderer = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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
      <NavBar user={ user.name } />
      <Container>
        {sales.length > 0
          && sales.map((sale) => (
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
      </Container>
    </>
  );
};

export default Orderer;
