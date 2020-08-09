import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectedCreator } from '../Redux/actions/actions';
import { 
  Details, 
  LeftHalf,
  RightHalf, 
  Return,
  PresentationCity,
  PresentationLocation } from '../styles/StyledComponents';
import ReturnArrow from '../assets/imgs/left.png';

const Destiny = ({ destiny }) => {
  const { city, url, state, country } = destiny;
  const dispatch = useDispatch();
  return (
    <Details>
      <LeftHalf>
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
          }}
        />
      </LeftHalf>
      <RightHalf>
        <PresentationCity>
          { city }
        </PresentationCity> 
        <PresentationLocation>
          { state },
          {' '}
          { country }
        </PresentationLocation>
      </RightHalf>
      <Return
        onClick={() => {
          dispatch(selectedCreator(false, destiny));
        }}
      >
        <img className="arrows" src={ReturnArrow} alt="return-arrow" />
      </Return>
    </Details>
  );
};

Destiny.propTypes = {
  destiny: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Destiny;
