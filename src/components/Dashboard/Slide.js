import React from 'react';
import styled from 'styled-components';

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

const SlideItem = styled.div`
`;

export default Slide;
