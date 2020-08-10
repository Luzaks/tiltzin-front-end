const dateExtract = date => {
  return date.slice(0, 10);
};

const timeExtract = date => {
  return date.slice(11, 16);
};

export {
  dateExtract,
  timeExtract,
};
