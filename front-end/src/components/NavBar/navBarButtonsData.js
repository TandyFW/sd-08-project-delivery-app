module.exports = {
  '/customer/products': [
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
  ],
  '/customer/orders': [
    {
      label: 'PRODUTOS',
      href: '/customer/products',
    },
    {
      label: 'MEUS PEDIDOS',
      href: '/customer/orders',
    },
  ],
  '/admin/manage': [
    {
      label: 'GERENCIAR USUÁRIOS',
      href: '/admin/manage',
    },
  ],
};
