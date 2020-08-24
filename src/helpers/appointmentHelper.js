const cityUpper = city => city.toUpperCase();
const dayExtract = date => date.slice(8, 10);
const monthExtract = date => date.slice(5, 7);
const yearExtract = date => date.slice(0, 4);

export {
  cityUpper,
  dayExtract,
  monthExtract,
  yearExtract,
};
