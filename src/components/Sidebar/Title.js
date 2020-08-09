import React from 'react';
import { TitleCont, TitleColor } from '../../styles/StyledComponents';
import Logo from '../../assets/imgs/logo.png';

const Tittle = () => (
  <TitleCont>
    <TitleColor>
      <img className="info-logo" src={Logo} alt="logo" />
      tiltzin
    </TitleColor>
  </TitleCont>
);

export default Tittle;
