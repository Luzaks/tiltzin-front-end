import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import DestinyLink from './DestinyLink';

const Slide = ({ content, destiny, }) => {
  const { city, state } = destiny;
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${content})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
      }}
    >
      <Info
        city={city}
        state={state} />

      <DestinyLink destiny={destiny} />
    </div>
  )
};

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  destiny: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Slide;
