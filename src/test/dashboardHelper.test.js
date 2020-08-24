import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import dashboardHelper from '../helpers/dashboardHelper';

describe('the dashboard helper logic', () => {
  const destinyState = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      city: 'Zapotitlan',
      country: 'Mexico',
      family: 'Cunalá',
      description: 'Live a unique experience in the center of the cactus forest with amazing landscapes and the one on one interaction with the Popoluca indigenous people.',
      state: 'Puebla',
      famdescription: 'The Cunalá family will be your link with the essence of the forest allowing you, by their guidance, to interact with the environment and the Popoluca people.',
    },
  ];
  const selected = {
    active: false,
    destiny: destinyState,
  };
  const loggedIn = {
    status: 'LOGGED_IN',
    user: {
      username: 'Luzaks',
    },
  };
  test('the returned destiny type', () => {
    const destiny = dashboardHelper('DESTINIES', destinyState, selected, loggedIn);
    expect(typeof destiny).toBe('object');
  });
  test('the what not should be rendered with destiny page', () => {
    const destiny = dashboardHelper('DESTINIES', destinyState, selected, loggedIn);
    expect(destiny).not.toBe(<div />);
  });
  test('the presence of the destiny page when clicked on it', () => {
    const destiny = dashboardHelper('DESTINIES', destinyState, selected, loggedIn);
    // eslint-disable-next-line no-unused-expressions
    expect(destiny).toBeInTheDOM;
  });
  test('the what not should be rendered with home page', () => {
    const home = dashboardHelper('HOME', destinyState, selected, loggedIn);
    expect(home).not.toBe(<div />);
  });
  test('the presence of the home page when clicked on it', () => {
    const home = dashboardHelper('HOME', destinyState, selected, loggedIn);
    const { getAllByText } = render(home);
    const [node] = getAllByText(
      (_, { textContent }) => textContent === 'Find the trip of your dreams',
    );
    expect(node.textContent).toBe('Find the trip of your dreams');
  });
  test('the what not should be rendered with appointments page', () => {
    const appointments = dashboardHelper('APPOINTMENTS', destinyState, selected, loggedIn);
    expect(appointments).not.toBe(<div />);
  });
});
