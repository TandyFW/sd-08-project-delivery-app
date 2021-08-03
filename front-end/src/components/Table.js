import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

export default function Table({ heading, body = [] }) {
  const ARRAY_SIZE = 5;
  console.log(body);

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
        {body.map((row, index) => (
          <TableRow
            className="products-table-row"
            row={ row }
            tableIndex={ index }
            key={ index }
            showRemove={ heading.length > ARRAY_SIZE }
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
};
