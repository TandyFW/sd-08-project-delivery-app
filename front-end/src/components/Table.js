import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import TableRowManage from './TableRowManage';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableList({ heading, body = [] }) {
  const { route } = useContext(DeliveryAppContext);
  const ARRAY_SIZE = 5;

  if (!body) return <p>Carregando ...</p>;
  return (
    <Table
      className="products-table"
      variant="simple"
      bg="orange"
      colorScheme="blackAlpha"
    >
      <Thead color="black">
        <Tr className="products-table-heading">
          {heading.map((element, index) => (
            <Th
              className="products-table-column"
              key={ index }
              color="#fffafa"
              fontWeight="bold"
            >
              { element }
            </Th>))}
        </Tr>
      </Thead>
      <Tbody color="#121212">
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
      </Tbody>
    </Table>
  );
}

TableList.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
};
