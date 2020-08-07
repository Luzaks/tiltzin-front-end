import React from 'react';
import leftArrow from '../../../assets/imgs/left.png';
import rightArrow from '../../../assets/imgs/right.png';
import { Right, Left } from '../../../styles/StyledComponents';

const Arrow = ({ direction, handleClick }) => {
  const RightArrow = (
    <Right
      onClick={handleClick}
    >
      <img src={rightArrow} alt="right-arrow" />
    </Right>
  );

  const LeftArrow = (
    <Left
      onClick={handleClick}
    >
      <img src={leftArrow} alt="left-arrow" />
    </Left>
  );

  if (direction === 'right') return RightArrow;
  return LeftArrow;
};

export default Arrow;
