import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedCreator } from '../Redux/actions/actions';
import { Details, DetailsHalf, Return } from '../styles/StyledComponents';
import ReturnArrow from '../assets/imgs/left.png';

const Destiny = destiny => {
  const { city } = destiny.destiny;
  const dispatch = useDispatch();
  return (
    <Details>
      <DetailsHalf>
        1
      </DetailsHalf>
      <DetailsHalf>
        1
      </DetailsHalf>
      <Return
        onClick={() => {
          dispatch(selectedCreator(false, destiny.destiny));
        }}
      >
      <img className="arrows" src={ReturnArrow} alt="return-arrow" />
      </Return>
    </Details>
  );
};

export default Destiny;
