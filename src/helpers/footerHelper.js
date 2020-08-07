import React from 'react';
import { Icon } from '../styles/StyledComponents';

const footerHelper = icon => (
  <Icon key={icon} className="social-icons" src={icon} alt="icon" />
);
export default footerHelper;
