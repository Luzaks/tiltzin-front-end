import React from 'react';
import Slider from '../components/Dashboard/Slider/Slider';

const dashboardHelper = clicked => {
  const images = [
    'https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1441661292604-830533546086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1546645417-738abd776828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1589592168688-ace8efe5099f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1534821609481-e6e7d4febfc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80',
    'https://images.unsplash.com/photo-1522815049-17303984a022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
    'https://images.unsplash.com/photo-1549656400-eb39ffdab352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
  ];

  if (clicked === 'MODELS') return <Slider slides={images} />;
  if (clicked === 'APPOINTMENTS') return <div>APPOINTMENTS</div>;
  return <div>Home</div>;
};

export default dashboardHelper;
