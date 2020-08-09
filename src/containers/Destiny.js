import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedCreator } from '../Redux/actions/actions';
import {
  Details,
  LeftHalf,
  RightHalf,
  Return,
  PresentationCity,
  PresentationLocation,
  PresDescription,
  PresentationFamily,
  PostTrip,
} from '../styles/StyledComponents';
import ReturnArrow from '../assets/imgs/left.png';
import Dating from '../components/Dashboard/Destiny/Date';
import postTrip from '../api/postTrip';

const Destiny = ({ destiny }) => {
  const {
    city,
    url,
    state,
    country,
    description,
    family,
    famdescription,
  } = destiny;
  const dispatch = useDispatch();
  const userId = useSelector(state => state.loggedIn.user.id);
  const destinyId = useSelector(state => state.selected.destiny.id);
  const tripState = useSelector(state => state.trip.date);

  const handleSubmit = ev => {
    postTrip(userId, destinyId, tripState);
    ev.preventDefault();
  };

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
          { state }
          ,
          {' '}
          { country }
        </PresentationLocation>
        <PresentationFamily>
          What to do?
        </PresentationFamily>
        <PresDescription>
          { description }
        </PresDescription>
        <PresentationFamily>
          Counselor family:
          {' '}
          {family}
        </PresentationFamily>
        <PresDescription>
          { famdescription }
        </PresDescription>
        <form onSubmit={ev => { handleSubmit(ev); }}>
          <Dating dispatch={dispatch} />
          <button type="submit">
            Book an appointment
          </button>
        </form>
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
};

export default Destiny;
