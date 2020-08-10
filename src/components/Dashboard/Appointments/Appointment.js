import React from 'react';
import PropTypes from 'prop-types';
import { dateExtract, timeExtract } from '../../../helpers/appointmentHelper';
import { Appoint } from '../../../styles/StyledComponents';

const Appointment = ({ date }) => (
  <Appoint>
    <span>
      {dateExtract(date)}
    </span>
    {' '}
    <span>
      {timeExtract(date)}
    </span>
  </Appoint>
);

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Appointment;
