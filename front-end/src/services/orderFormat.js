// https://stackoverflow.com/questions/4726040/javascript-adding-zeros-to-the-beginning-of-a-string-max-length-4-chars

const orderFormat = (order, lenght) => {
  let formatedOrder = order.toString();
  while (formatedOrder.length < lenght) {
    formatedOrder = `0${formatedOrder}`;
  }
  return formatedOrder;
};

export default orderFormat;
