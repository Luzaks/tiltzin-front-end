import React from 'react';
import Slider from '../components/Dashboard/Slider/Slider';
import Destiny from '../containers/Destiny';

const dashboardHelper = (clicked, destinies, selected) => {
  const { active, destiny } = selected;

  if (active) return <Destiny destiny={destiny} />
  if (clicked === 'DESTINIES') return <Slider slides={destinies} />;
  if (clicked === 'APPOINTMENTS') return <div>APPOINTMENTS</div>;
  return <div>Home</div>;
};

export default dashboardHelper;
