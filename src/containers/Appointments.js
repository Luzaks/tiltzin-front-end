import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getTrips from '../api/getTrips';
import Appointment from '../components/Dashboard/Appointments/Appointment';

const Appointments = () => {
  const dispatch = useDispatch();

  getTrips(dispatch);

  const tripsState = useSelector(state => state.trips);
  const userId = useSelector(state => state.loggedIn.user.id);

  const tripsFilter = (trip, Id) => {
    if (trip.user_id === Id) return <Appointment key={trip.id} tripInfo={trip} />;
    return null;
  };

  return (
    <div className="appoint-container">
      {tripsState.map(trip => (
        tripsFilter(trip, userId)
      ))}
    </div>
  );
};

export default Appointments;
