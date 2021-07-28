export default (role) => {
  switch (role) {
  case 'customer':
    return '/customer/products';
  case 'seller':
    return '/seller/orders';
  case 'administrator':
    return '/admin/manage';
  default:
    return '/login';
  }
};
