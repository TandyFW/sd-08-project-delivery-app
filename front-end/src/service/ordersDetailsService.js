const orderNumber = (id) => {
  const lengthMax = 5;
  const result = lengthMax - id.length;
  return result;
};

const disableButton = (status) => {
  if (status === 'Em Trânsito') return false;
  return true;
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
