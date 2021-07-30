const dateFormat = (completeDate) => {
  const MIN_CHARACTER = 9;
  const date = new Date(completeDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month > MIN_CHARACTER ? month : `0${month}`}/${year}`;
};

export default dateFormat;
