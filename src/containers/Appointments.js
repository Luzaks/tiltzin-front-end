import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getTrips from '../api/getTrips';
import Appointment from '../components/Dashboard/Appointments/Appointment';

const Appointments = () => {
  const dispatch = useDispatch();

  getTrips(dispatch);

  const tripsState = useSelector(state => state.trips);

  return (
    <div className="appoint-container">
      {tripsState.map(trip => (
        <Appointment key={trip.id} tripInfo={trip} />
      ))}
    </div>
  );
};

export default Appointments;
