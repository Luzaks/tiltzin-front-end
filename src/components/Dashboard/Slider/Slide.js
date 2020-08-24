import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import DestinyLink from './DestinyLink';
import { DestinyWrap } from '../../../styles/StyledComponents';

const Slide = ({ content, destiny }) => {
  const { city, state, country } = destiny;
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
      <DestinyWrap>

        <Info
          city={city}
          state={state}
          country={country}
        />

        <DestinyLink destiny={destiny} />
      </DestinyWrap>
    </div>
  );
};

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  destiny: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Slide;
