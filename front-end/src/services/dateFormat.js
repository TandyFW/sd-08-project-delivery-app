const dateFormat = (completeDate) => {
  const date = new Date(completeDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + 1;
  return `${day}/${month}/${year}`;
};

export default dateFormat;
