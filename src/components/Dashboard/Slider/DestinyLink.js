import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Wrap, Know } from '../../../styles/StyledComponents';
import { selectedCreator } from '../../../Redux/actions/actions';
import Logo from '../../../assets/imgs/logo.png';

const DestinyLink = ({ destiny }) => {
  const dispatch = useDispatch();
  return (
    <Wrap
      onClick={() => {
        dispatch(selectedCreator(true, destiny));
      }}
    >
      <img className="info-logo" src={Logo} alt="logo" />
      <Know>Know more</Know>
    </Wrap>
  );
};

DestinyLink.propTypes = {
  destiny: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DestinyLink;
