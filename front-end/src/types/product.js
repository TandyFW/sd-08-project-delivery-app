import { shape, number, string } from 'prop-types';

const productType = shape({
  id: number,
  name: string,
  price: string,
  urlImage: string,
});

export default productType;
