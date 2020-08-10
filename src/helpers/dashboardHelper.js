import React from 'react';
import Slider from '../components/Dashboard/Slider/Slider';
import Destiny from '../containers/Destiny';
import Appointments from '../containers/Appointments';
import Home from '../components/Dashboard/Home';

const dashboardHelper = (clicked, destinies, selected, tripsState, loggedState) => {
  const { active, destiny } = selected;

  if (active) return <Destiny destiny={destiny} />;
  if (clicked === 'HOME') return <Home user={loggedState} />;
  if (clicked === 'DESTINIES') return <Slider slides={destinies} />;
  if (clicked === 'APPOINTMENTS') return <Appointments trips={tripsState} />;
  return null;
};

export default dashboardHelper;
