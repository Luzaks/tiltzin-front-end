import { dateExtract, timeExtract } from '../helpers/appointmentHelper';

test('the rendering helper.', () => {
  const date = '2020-08-10T22:30:52';
  const returnDate = '2020-08-10';
  const DateTest = dateExtract(date);
  expect(DateTest).toStrictEqual(returnDate);
});

test('the rendering helper.', () => {
  const date = '2020-08-10T22:30:52';
  const returnDate = '22:30';
  const DateTest = timeExtract(date);
  expect(DateTest).toStrictEqual(returnDate);
});
