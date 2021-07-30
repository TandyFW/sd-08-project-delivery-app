export default (number) => {
  const num = +number;
  const formatted = num.toFixed(2).toString().replace(/\./, ',');
  return `R$ ${formatted}`;
};
