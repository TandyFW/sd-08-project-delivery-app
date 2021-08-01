const dateFormat = (completeDate) => {
  const MIN_CHARACTER = 9;
  const date = new Date(completeDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formatedMonth = month > MIN_CHARACTER ? month : `0${month}`;
  const day = date.getDate();
  const formatedDay = day > MIN_CHARACTER ? day : `0${day}`;
  return `${formatedDay}/${formatedMonth}/${year}`;
};

export default dateFormat;
