import React from 'react';
import PropTypes from 'prop-types';
import { dateExtract } from '../../../helpers/appointmentHelper';
import { Appoint } from '../../../styles/StyledComponents';

const Appointment = ({ date }) => (
  <Appoint>
    <span>
      Date for:
    </span>
    <span>
      {dateExtract(date)}
    </span>
  </Appoint>
);

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Appointment;
