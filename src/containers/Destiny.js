import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedCreator } from '../Redux/actions/actions';

const Destiny = destiny => {
  const { city } = destiny.destiny;
  const dispatch = useDispatch();
  return (
    <div>
      <span>{city}</span>
      <button
        onClick={() => {
          dispatch(selectedCreator(false, destiny.destiny));
        }}
      >
        go back
      </button>
    </div>
  );
};

export default Destiny;
