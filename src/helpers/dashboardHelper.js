import React from 'react';
import Slider from '../components/Dashboard/Slider/Slider';

const dashboardHelper = (clicked, destinies) => {
  if (clicked === 'DESTINIES'){
    return <Slider slides={destinies} />;
  }
  if (clicked === 'APPOINTMENTS') return <div>APPOINTMENTS</div>;
  return <div>Home</div>;
};

export default dashboardHelper;
