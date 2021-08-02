export default (userType) => {
  const prefix = userType === 'customer'
    ? 'customer_order_details__' : 'seller_order_details__';
  return {
    header: {
      orderId: `${prefix}element-order-details-label-order-id`,
      sellerName: `${prefix}element-order-details-label-seller-name`,
      orderDate: `${prefix}element-order-details-label-order-date`,
      deliveryStatus: `${prefix}element-order-details-label-delivery-status`,
    },
    table: {
      itemNumber: `${prefix}element-order-table-item-number-`,
      name: `${prefix}element-order-table-name-`,
      quantity: `${prefix}element-order-table-quantity-`,
      unitPrice: `${prefix}element-order-table-unit-price-`,
      subtotal: `${prefix}element-order-table-sub-total-`,
    },
    totalPrice: `${prefix}element-order-total-price`,
  };
};
