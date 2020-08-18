import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getTrips from '../api/getTrips';
import Appointment from '../components/Dashboard/Appointments/Appointment';
import { tripsCreator } from '../Redux/actions/actions';

const Appointments = () => {
  const dispatch = useDispatch();
  async function fetchData() {
    try {
      const trips = await getTrips();

      dispatch(tripsCreator(trips));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
  fetchData().then();
  const tripsState = useSelector(state => state.trips);
  return (
    <div className="appoint-container">
      {tripsState.map(trip => (<Appointment key={trip.id} date={trip.date} />))}
    </div>
  );
};

export default Appointments;
