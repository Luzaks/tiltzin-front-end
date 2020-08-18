import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createdCreator, selectedCreator } from '../Redux/actions/actions';
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
  Created,
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
  const createTripState = useSelector(state => state.created.status);

  const handleSubmit = (ev, dispatch) => {
    postTrip(userId, destinyId, tripState, dispatch);
    ev.preventDefault();
  };

  const reservedStatus = created => {
    if (created === true) return <Created>Date reserved!</Created>;
    return null;
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
        <PresentationFamily>
          Book an appointment
        </PresentationFamily>
        <PresDescription>
          You only have to choose a date and click  in the button below.
        </PresDescription>
        <form className="date-form" onSubmit={ev => { handleSubmit(ev, dispatch); }}>
          { reservedStatus(createTripState) }
          <Dating dispatch={dispatch} />
          <PostTrip type="submit">
            Reserve now
          </PostTrip>
        </form>
      </RightHalf>
      <Return
        onClick={() => {
          dispatch(selectedCreator(false, destiny));
          dispatch(createdCreator(false));
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
