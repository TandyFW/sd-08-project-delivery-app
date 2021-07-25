import React from 'react';
import NavBar from '../components/NavBar';
import CardProduct from '../components/CardProduct';
import { ProductList } from '../styles/pages/CustomerProducts.styled';

function ClientProducts() {
  const prefix = 'customer_products__';
  return (
    <>
      <NavBar user="Sicrano da Silva" />
      <ProductList>
        <CardProduct
          prefix={ prefix }
          price="R$ 3,99"
          tumbnail="https://static.paodeacucar.com/img/uploads/1/54/12060054.png"
          title="Becks 300ml"
          id={ 1 }
        />
        <CardProduct
          prefix={ prefix }
          price="R$ 3,99"
          tumbnail="https://static.paodeacucar.com/img/uploads/1/54/12060054.png"
          title="Becks 300ml"
          id={ 2 }
        />
        <CardProduct
          prefix={ prefix }
          price="R$ 3,99"
          tumbnail="https://static.paodeacucar.com/img/uploads/1/54/12060054.png"
          title="Becks 300ml"
          id={ 3 }
        />
        <CardProduct
          prefix={ prefix }
          price="R$ 3,99"
          tumbnail="https://static.paodeacucar.com/img/uploads/1/54/12060054.png"
          title="Becks 300ml"
          id={ 2 }
        />
        <CardProduct
          prefix={ prefix }
          price="R$ 3,99"
          tumbnail="https://static.paodeacucar.com/img/uploads/1/54/12060054.png"
          title="Becks 300ml"
          id={ 2 }
        />
      </ProductList>
    </>
  );
}

export default ClientProducts;
