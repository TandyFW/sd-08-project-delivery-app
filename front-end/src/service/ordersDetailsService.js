const orderNumber = (id) => {
  const lengthMax = 5;
  const result = lengthMax - id.length;
  return result;
};

const disableButton = (status) => {
  if (status === 'Entregue') {
    return true;
  }
  return false;
};

const disableButtonPrepar = (status) => {
  if (status === 'Pendente') return false;
  return true;
};

const disableButtonDelivery = (status) => {
  if (status === 'Preparando') return false;
  return true;
};

module.exports = {
  orderNumber,
  disableButton,
  disableButtonPrepar,
  disableButtonDelivery,
};
