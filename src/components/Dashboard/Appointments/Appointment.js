import React from 'react';
import PropTypes from 'prop-types';
import { Appoint } from '../../../styles/StyledComponents';

const Appointment = ({ date }) => (
  <Appoint>
    {date}
  </Appoint>
);

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Appointment;
