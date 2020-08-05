import React from 'react';
import { useSelector } from 'react-redux';
import Routes from '../Router/Routes';
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
