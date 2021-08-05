import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import TableRowManage from './TableRowManage';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function Table({ heading, body = [] }) {
  const { route } = useContext(DeliveryAppContext);
  const ARRAY_SIZE = 5;

  if (!body) return <p>Carregando ...</p>;
  return (
    <table className="products-table">
      <thead>
        <tr className="products-table-heading">
          {heading.map((element, index) => (
            <th
              className="products-table-column"
              key={ index }
            >
              { element }
            </th>))}
        </tr>
      </thead>
      <tbody>
        {(route === 'customer' || route === 'seller')
          && (
            body.map((row, index) => (
              <TableRow
                className="products-table-row"
                row={ row }
                tableIndex={ index }
                key={ row.productId }
                showRemove={ heading.length > ARRAY_SIZE }
              />
            )))}
        {route === 'administrator'
          && (
            body.map((row, index) => (
              <TableRowManage
                className="products-table-row"
                row={ row }
                tableIndex={ index }
                key={ row.productId }
                showRemove={ heading.length > ARRAY_SIZE }
              />
            )))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
};
