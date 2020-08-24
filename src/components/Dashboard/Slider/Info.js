import React from 'react';
import PropTypes from 'prop-types';
import {
  DestinyInfo,
  DestinyCity,
  DestinyState,
  DestinyCountry,
} from '../../../styles/StyledComponents';

const Info = ({ city, state, country }) => (
  <DestinyInfo>
    <DestinyCity>{ city }</DestinyCity>
    <DestinyState>{ state }</DestinyState>
    <DestinyCountry>{ country }</DestinyCountry>
  </DestinyInfo>
);

Info.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Info;
