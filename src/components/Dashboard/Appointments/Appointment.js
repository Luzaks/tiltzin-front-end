import React from 'react';
import PropTypes from 'prop-types';
import { dateExtract } from '../../../helpers/appointmentHelper';
import { Appoint } from '../../../styles/StyledComponents';

const Appointment = ({ date, city }) => (
  <Appoint>
    <span>
      Trip to:
      {city}
    </span>
    <span>
      in
      {' '}
      {dateExtract(date)}
    </span>
  </Appoint>
);

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Appointment;
