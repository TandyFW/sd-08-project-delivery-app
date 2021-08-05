import md5 from 'md5';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Table from './Table';
import { HEADING_MANAGER_DETAILS } from '../utils/Lists';
import { emailVerify } from '../utils/functions';

export default function ManageDetails() {
  const [isValid, setIsValid] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setEncryptPassword] = useState('');
  const [currentSelect, setCurrentSelect] = useState('');
  const DATA_TESTID_PREFIX = 'admin_manage__';

  const validation = () => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentName(name);
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (!emailVerify(email)
      || password.length < MIN_PASSWORRD_LENGTH
      || name.length < MIN_NAME_LENGTH) {
      setIsValid(false);
    }
    if (emailVerify(email)
      && password.length >= MIN_PASSWORRD_LENGTH
      && name.length >= MIN_NAME_LENGTH) {
      setIsValid(true);
    }
  };

  const selectType = () => {
    const currentType = document.querySelector('#type').value;
    setCurrentSelect(currentType);
  };

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
            maxLength="100"
            placeholder="Nome e sobrenome"
            onKeyUp={ validation }
            id="name"
            data-testid={ `${DATA_TESTID_PREFIX}input-name` }
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="text"
            name="Email"
            maxLength="100"
            placeholder="seu-email@site.com.br"
            onKeyUp={ validation }
            id="email"
            data-testid={ `${DATA_TESTID_PREFIX}input-email` }
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            name="Senha"
            maxLength="30"
            placeholder="**********"
            onKeyUp={ validation }
            id="password"
            data-testid={ `${DATA_TESTID_PREFIX}input-password` }
          />
        </label>
        <label htmlFor="type" className="label-form-manage">
          Tipo
          <select
            className="type-select"
            name="type-select"
            id="type"
            onChange={ selectType }
            data-testid={ `${DATA_TESTID_PREFIX}select-role` }
          >
            <option
              className="option-type"
              value=""
            >
              .
            </option>
            <option
              className="option-type"
              value="customer"
            >
              Cliente
            </option>
            <option
              className="option-type"
              value="seler"
            >
              Vendedor
            </option>
            <option
              className="option-type"
              value="adminstrator"
            >
              Administrador
            </option>
          </select>
        </label>
        <button
          type="button"
          className="btn-confirm-delivery"
          disabled={ !isValid }
          onClick={
            console.log(currentName, currentEmail, currentPassword, currentSelect)
          }
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
