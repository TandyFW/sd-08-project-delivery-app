import React, { useReducer } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const renderExpenseRow = (item, index) => {
  const prefix = 'customer_checkout__';
  return (
    <tr key={ id }>
      <td data-testid={ `${prefix}element-order-table-item-number-${index}` }>
        { itemNumber }
      </td>
      <td data-testid={ `${prefix}element-order-table-name-${index}` }>
        { name }
      </td>
      <td data-testid={ `${prefix}element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `${prefix}element-order-table-unit-price-${index}` }>
        { unitPrice }
      </td>
      <td data-testid={ `${prefix}element-order-table-sub-total-${index}` }>
        { subTotal }
      </td>
      <td data-testid={ `${prefix}element-order-table-remove-${index}` }>
        <button type="button">Remover</button>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => removeExpense(id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

const Table = () => {
  const products = useReducer((state) => state.products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { products && products.map((item, index) => renderExpenseRow(item, index)) }
        </tbody>
      </table>
    </div>
  );
};

  // removeExpense: (id) => ({ type: Types.REMOVE_EXPENSE, payload: id }),
  // fetchCurrencies: () => async (dispatch) => {
  //   const currencies = await getCurrencies();
  //   delete currencies.USDT;
  //   const currenciesCodes = Object.values(currencies)
  //     .map(({ code }) => code);
  //   dispatch(Creators.saveCurrencies(currenciesCodes));
  // },

export default Table;
