import React from 'react';
import {
  SideFoot, MiddleFoot, Icon, Credits,
} from '../../styles/StyledComponents';
import Twitter from '../../assets/imgs/twitter.png';
import Facebook from '../../assets/imgs/facebook.png';
import Google from '../../assets/imgs/google.png';
import Vimeo from '../../assets/imgs/vimeo.png';
import Pinterest from '../../assets/imgs/pinterest.png';

const Footer = () => {
  const icons = [
    Twitter,
    Facebook,
    Google,
    Vimeo,
    Pinterest,
  ];

  return (
    <SideFoot>
      <MiddleFoot>
        {icons.map(icon => <Icon key={icon} className="social-icons" src={icon} alt="icon" />)}
      </MiddleFoot>
      <MiddleFoot>
        <Credits>2020 Original design by Luzaks.</Credits>
      </MiddleFoot>
    </SideFoot>

  );
};

export default Footer;
