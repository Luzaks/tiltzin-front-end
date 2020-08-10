import React from 'react';
import PropTypes from 'prop-types';
import {
  HomeCont,
  HomeHeader,
  HomeSubHeader,
  HomeSlogan,
  HomeDescription,
} from '../../styles/StyledComponents';

const Home = ({ user }) => {
  const { username } = user;
  return (
    <HomeCont>
      <HomeHeader>
        Hello
        {' '}
        {username}
        {' '}
        welcome to
        {' '}
        <HomeSubHeader> tiltzin </HomeSubHeader>
      </HomeHeader>
      <HomeSlogan>Find the trip of your dreams</HomeSlogan>
      <HomeDescription>
        <span>
          All our activities are being planned and leaded
          by certified indigenous families
        </span>
        <span>
          Start browsing on our destinies and reserve a day,
          our families will contact you
        </span>
      </HomeDescription>
    </HomeCont>
  );
};

Home.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
