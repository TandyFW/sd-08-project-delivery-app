export default (number) => {
  const formatted = number.toFixed(2).toString().replace(/\./, ',');
  return `R$ ${formatted}`;
};
