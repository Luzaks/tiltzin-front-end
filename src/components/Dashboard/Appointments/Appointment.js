import React from 'react';
import PropTypes from 'prop-types';
import {
  cityUpper,
  dayExtract,
  monthExtract,
  yearExtract,
} from '../../../helpers/appointmentHelper';
import { Appoint } from '../../../styles/StyledComponents';
import deleteTrip from '../../../api/deleteTrip';

const Appointment = ({ tripInfo }) => {
  const { date, id } = tripInfo;
  return (
    <Appoint>
      <span>
        {`${cityUpper(tripInfo.destiny_name)}`}
      </span>
      <span>
        {`${dayExtract(date)}-${monthExtract(date)}-${yearExtract(date)}`}
      </span>
      <button
        type="submit"
        onClick={() => {
          deleteTrip(id);
        }}
      >
        cancel
      </button>
    </Appoint>
  );
};

Appointment.propTypes = {
  tripInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Appointment;
