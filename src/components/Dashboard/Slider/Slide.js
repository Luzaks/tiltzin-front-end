import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

const Slide = ({ 
  content, city, country, family, description, state, famdescription, id 
}) => (
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
      country={country}
      family={family}
      description={description}
      state={state}
      famdesc={famdescription}
      id={id} />
  </div>
);

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  famdescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Slide;
