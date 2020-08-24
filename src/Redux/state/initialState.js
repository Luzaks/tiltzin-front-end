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
    pages: ['HOME', 'DESTINIES', 'TRIPS'],
  },
  destinies: [],
  selected: {
    active: false,
    destiny: {},
  },
  trip: {
    date: '',
  },
  created: false,
  trips: [],
};

export default initialState;
