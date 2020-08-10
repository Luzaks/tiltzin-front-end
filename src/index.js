import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './assets/fonts/Typographica.ttf';
import './assets/fonts/Choppers.ttf';
import './assets/fonts/ImSpiegelland.ttf';
import './assets/fonts/MeganJune.ttf';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
