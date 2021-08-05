const clientPaths = [
  {
    label: 'PRODUTOS',
    href: '/customer/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    label: 'MEUS PEDIDOS',
    href: '/customer/orders',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

module.exports = {
  customer: clientPaths,
  admin: [
    {
      label: 'GERENCIAR USUÁRIOS',
      href: '/admin/manage',
    },
  ],
  seller: [
    {
      label: 'PEDIDOS',
      href: '/seller/orders',
    },
  ],
};
