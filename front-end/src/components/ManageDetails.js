import React from 'react';
// import PropTypes from 'prop-types';
// import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import { HEADING_MANAGER_DETAILS } from '../utils/Lists';
// import fetchOrderDetails from '../services/fetchOrderDetails';

export default function ManageDetails() {
  // const { sellers, orderStatus, setOrderStatus } = useContext(DeliveryAppContext);
  // const [sellerName, setSellerName] = useState('');
  // const [orderDate, setOrderDate] = useState('');
  // const [order, setOrder] = useState({});

  // const getSellerName = () => {
  //   const { sellerId } = order;
  //   const currentSellerName = sellers.filter((seller) => seller.sellerId === sellerId);
  //   setSellerName(currentSellerName[0]);
  // };

  // const SLICE_INDEX_ZERO = 0;
  // const SLICE_INDEX_FOUR = 4;
  // const SLICE_INDEX_FIVE = 5;
  // const SLICE_INDEX_SEVEN = 7;
  // const SLICE_INDEX_EIGHT = 8;
  // const SLICE_INDEX_TEN = 10;
  const DATA_TESTID_PREFIX = 'admin_manage__';
  // const formatDate = () => {
  //   if (order.salesDate !== undefined) {
  //     const { salesDate } = order;
  //     const day = salesDate.slice(SLICE_INDEX_EIGHT, SLICE_INDEX_TEN);
  //     const month = salesDate.slice(SLICE_INDEX_FIVE, SLICE_INDEX_SEVEN);
  //     const year = salesDate.slice(SLICE_INDEX_ZERO, SLICE_INDEX_FOUR);
  //     const newDate = `${day}/${month}/${year}`;
  //     setOrderDate(newDate);
  //   }
  // };

  // const confirmDelivery = () => {
  //   setOrderStatus('ENTREGUE');
  // };

  // const getOrder = async (id) => {
  //   const data = await fetchOrderDetails(id);
  //   console.log(data[0]);
  //   setOrder(data[0]);
  // };

  // const getId = () => {
  //   const location = window.location.pathname;
  //   console.log(location);

  //   const arrayLocation = location.split('/');
  //   console.log(arrayLocation);

  //   const currentId = arrayLocation[3];
  //   console.log(currentId);
  //   console.log(typeof (currentId));

  //   getOrder(+currentId);
  // };

  // useEffect(() => {
  //   getSellerName();
  //   formatDate();
  // }, [order]);

  // useEffect(() => getId(), []);

  return (
    <section className="order-details-container">
      <h2 className="title-2">
        Cadastrar novo usuário
      </h2>
      <div className="order-details-info-bar">
        <label htmlFor="Nome">
          Nome
          <input
            type="text"
            name="Nome"
            data-testid={ `${DATA_TESTID_PREFIX}input-name` }
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="text"
            name="Email"
            data-testid={ `${DATA_TESTID_PREFIX}input-email` }
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            name="Senha"
            data-testid={ `${DATA_TESTID_PREFIX}input-password` }
          />
        </label>
        <label htmlFor="Tipo">
          Tipo
          <input
            type="text"
            name="Tipo"
            data-testid={ `${DATA_TESTID_PREFIX}select-role` }
          />
        </label>
        <button
          type="button"
          className="btn-confirm-delivery"
          // onClick={ confirmDelivery }
          data-testid={ `${DATA_TESTID_PREFIX}button-register` }
        >
          CADASTRAR
        </button>
      </div>
      <h2 className="title-2">
        Lista de usuários
      </h2>
      <Table
        heading={ HEADING_MANAGER_DETAILS }
        // body={ order && order.products }
      />
    </section>
  );
}

// Details.propTypes = {
//   order: PropTypes.shape({
//     // id: PropTypes.number,
//     sellerId: PropTypes.number,
//     salesDate: PropTypes.string,
//     status: PropTypes.string,
//     Products: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };
