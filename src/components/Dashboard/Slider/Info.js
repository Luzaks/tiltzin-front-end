import React from 'react';
import PropTypes from 'prop-types';
import { DestinyInfo, DestinyDashy } from '../../../styles/StyledComponents';

const Info = ({ city, state }) => {
  return(
    <DestinyInfo>
        <DestinyDashy>{ city }</DestinyDashy>
        {' '}
        <DestinyDashy>{ state }</DestinyDashy>
    </DestinyInfo>  
  );
};

Info.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Info;
