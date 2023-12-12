export const getDateTimeStamp = () => {
  const currentDate = new Date();
  const dateTimeStamp = currentDate
    .toLocaleString()
    .replaceAll("/", "-")
    .replace(",", "")
    .toLocaleLowerCase();

  return dateTimeStamp;
};

export const generateUUID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
