import Twitter from '../assets/imgs/twitter.png';
import footerHelper from '../helpers/footerHelper';
import '@testing-library/jest-dom';

test('the type of the returned footer helper.', () => {
  const Icon = footerHelper(Twitter);
  expect(typeof Icon).toBe('object');
});

test('the rendering footer helper Icons .', () => {
  const Icon = footerHelper(Twitter);
  expect(Icon).toMatchSnapshot(`
     <img src={'../assets/imgs/twitter.png'} alt="icon" />
  `);
});
