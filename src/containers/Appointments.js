import React from 'react';
import PropTypes from 'prop-types';
import Appointment from '../components/Dashboard/Appointments/Appointment';
import { AppCont } from '../styles/StyledComponents';

const Appointments = ({ trips }) => (
  <AppCont>
    {trips.map(trip => (<Appointment key={trip.destiny} date={trip.date} />))}
  </AppCont>
);

Appointments.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Appointments;
