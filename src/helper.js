export const isEmpty = (value) => !/\S/.test(value);

export const pad = (x) => (x < 10 ? `0${x}` : x);

export const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const day = `${year}-${pad(month + 1)}-${pad(date)} ${pad(hour)}:${pad(
    minute,
  )}`;

  return day;
};
