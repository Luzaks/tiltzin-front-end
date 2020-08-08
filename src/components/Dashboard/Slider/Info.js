import React from 'react';
import PropTypes from 'prop-types';
import { DestinyInfo, DestinyDashy } from '../../../styles/StyledComponents';

const Info = ({ city, country, family, description, state, famdesc, id}) => {
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
  country: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  famdescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Info;
