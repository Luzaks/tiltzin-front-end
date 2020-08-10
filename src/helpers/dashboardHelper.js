import React from 'react';
import Slider from '../components/Dashboard/Slider/Slider';
import Destiny from '../containers/Destiny';
import Appointments from '../containers/Appointments';

const dashboardHelper = (clicked, destinies, selected, tripsState) => {
  const { active, destiny } = selected;

  if (active) return <Destiny destiny={destiny} />;
  if (clicked === 'DESTINIES') return <Slider slides={destinies} />;
  if (clicked === 'APPOINTMENTS') return <Appointments trips={tripsState} />;
  return <div>Home</div>;
};

export default dashboardHelper;
