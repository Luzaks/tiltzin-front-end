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

export default initialState;
