import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ content }) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundImage: `url(${content})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  />
);

Slide.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Slide;
