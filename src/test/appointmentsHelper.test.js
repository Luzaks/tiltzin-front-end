import {
  cityUpper,
  dayExtract,
  monthExtract,
  yearExtract,
} from '../helpers/appointmentHelper';

test('the rendering helper.', () => {
  const date = '2020-08-10T22:30:52';
  const returnDate = '10';
  const DateTest = dayExtract(date);
  expect(DateTest).toStrictEqual(returnDate);
});

test('the rendering helper.', () => {
  const date = '2020-08-10T22:30:52';
  const returnDate = '08';
  const DateTest = monthExtract(date);
  expect(DateTest).toStrictEqual(returnDate);
});

test('the rendering helper.', () => {
  const date = '2020-08-10T22:30:52';
  const returnDate = '2020';
  const DateTest = yearExtract(date);
  expect(DateTest).toStrictEqual(returnDate);
});

test('the rendering helper.', () => {
  const city = 'San Miguel';
  const returnCity = 'SAN MIGUEL';
  const cityTest = cityUpper(city);
  expect(cityTest).toStrictEqual(returnCity);
});
