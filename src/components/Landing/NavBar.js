import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar, Title, Span, Brand, Button,
} from '../../styles/StyledComponents';

const NavigationBar = ({ onClick }) => (
  <NavBar>
    <Title>
      <Span>tiltzin</Span>
      <Brand>&#169;</Brand>
    </Title>
    <div>
      <Button
        onClick={onClick}
      >
        Sign in
      </Button>
      {' '}
      <Button
        onClick={onClick}
      >
        Sign Up
      </Button>
    </div>
  </NavBar>
);

NavigationBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavigationBar;
