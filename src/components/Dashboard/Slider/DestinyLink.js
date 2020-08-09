import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Wrap, Know } from '../../../styles/StyledComponents';
import { selectedCreator } from '../../../Redux/actions/actions';

const DestinyLink = ({ destiny }) => {
  const dispatch = useDispatch();
  return (
    <Wrap
      onClick={() => {
        dispatch(selectedCreator(true, destiny));
      }}
    >
      <Know>Know more</Know>
    </Wrap>
  );
};

DestinyLink.propTypes = {
  destiny: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DestinyLink;
