import React from 'react';
import { shallow, configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

const initialState = {
  user: {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  loggedIn: {
    status: 'NOT_LOGGED_IN',
    user: {},
  },
  pages: {
    clicked: 'HOME',
    pages: ['HOME', 'DESTINIES', 'APPOINTMENTS'],
  },
  destinies: [],
  selected: {
    active: false,
    destiny: {},
  },
  trip: {
    date: '',
  },
  trips: [],
};
const mockStore = configureMockStore();
const store = mockStore({initialState});
configure({adapter: new Adapter()});

describe("App Component", () => {
  it("should render without throwing an error", () => {
      expect(
          shallow(
              <Provider store={store}>
                  <App />
              </Provider>
          ).exists(<span class="sc-AxhUy hdSVIO">tiltzin</span>)
      ).toBe(false);
  });
});
