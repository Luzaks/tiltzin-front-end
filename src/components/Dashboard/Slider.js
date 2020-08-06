import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SliderContent from './SliderContent';
import Slide from './Slide';
import { SliderCSS } from '../../styles/StyledComponents';

const Slider = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map(slide => (
          <Slide key={slide} content={slide} />
        ))}
      </SliderContent>
    </SliderCSS>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
