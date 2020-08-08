import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DesLinkCont } from '../../../styles/StyledComponents';
import { selectedCreator } from '../../../Redux/actions/actions';

const DestinyLink = ({ destiny }) => {
  const { id } = destiny; 
  const dispatch = useDispatch();  
  return (
    <DesLinkCont
      onClick={() => {
        dispatch(selectedCreator(true, destiny)); 
      }}  
    >
      see      
    </DesLinkCont>
  );
};

DestinyLink.propTypes = {
    destiny: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DestinyLink;
