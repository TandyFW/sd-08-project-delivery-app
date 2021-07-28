import React from 'react';

export default function Table({heading, body}) {
  return (
    <table className="products-table">
      <thead>
        <tr className="products-table-heading">
          {heading.map((element, index) => <th className="products-table-column" key={index}>{element}</th>)}
        </tr>
      </thead>
      <tbody>
        {body.map((row, index) => <TableRow className="products-table-row" row={row} key={index}/>)}
      </tbody>
    </table>
  );
}
