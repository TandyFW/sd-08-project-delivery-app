import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, match }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const [showRemove, setShowRemove] = useState(false);

  const getLocation = () => {
    const currentLocation = match.path;
    if (currentLocation.includes('checkout')) return setShowRemove(true);
  };

  const remove = () => {
    const currentList = itemsList.filter((item) => item[1] !== row[1])
    setItemsList(currentList);
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => renderRow(), [itemsList, showRemove])

  return (
    <tr>
      {row.map((value, index) => <td className="products-table-cel" key={index}>{value}</td>)}
      {showRemove && (
        <td>
          <button
            type="button"
            className="btn-remove"
            onclick={ remove }
          >
            Remover
          </button>
        </td>)}
    </tr>
  );
}
