import React from 'react';
import Routes from '../Router/Routes';
import { useSelector } from 'react-redux';
import '../styles/App.css';

function App() {
  const loggedInStatus = useSelector(state => state.loggedIn);
  return (
    <div className="App">
      <Routes
        loggedInStatus={loggedInStatus}
      />
    </div>
  );
}

export default App;
