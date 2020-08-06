import React from 'react';
import PropTypes from 'prop-types';
import {
  DashBoard, SideBar, TitleColor, Dashy,
} from '../styles/StyledComponents';

const Main = ({ loggedInStatus }) => (
  <DashBoard>
    {console.log(loggedInStatus)}
    <SideBar>
      <TitleColor>
        tiltzin
      </TitleColor>
      <div>
        Hola
      </div>
    </SideBar>
    <Dashy>
      status:
      {' '}
      {loggedInStatus.status}
    </Dashy>
  </DashBoard>
);

Main.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
