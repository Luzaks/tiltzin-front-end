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
    clicked: 'none',
    pages: ['DESTINIES', 'APPOINTMENTS'],
  },
  destinies: [],
  selected: {
    active: false,
    destiny: {},
  },
};

export default initialState;
