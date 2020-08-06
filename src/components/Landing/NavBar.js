import React from 'react';
import {
  NavBar, Title, Span, Brand, Button,
} from '../../styles/StyledComponents';

const NavigationBar = () => (
  <NavBar>
    <Title>
      <Span>tiltzin</Span>
      <Brand>&#169;</Brand>
    </Title>
    <div>
      <Button>Sing in</Button>
      {' '}
      <Button>Sing Up</Button>
    </div>
  </NavBar>
);

export default NavigationBar;
