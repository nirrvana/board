export const isEmpty = (value) => !/\S/.test(value);

export const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();

  const day = `${year}-${month + 1 < 10 ? `0${month + 1}` : month}-${
    date < 10 ? `0${date}` : date
  } ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;

  return day;
};
