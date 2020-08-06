import React from 'react';
import PropTypes from 'prop-types';
import { DashBoard, SideBar } from '../styles/StyledComponents'

const Main = ({ loggedInStatus }) => (
  <DashBoard>
   <SideBar>

   </SideBar>
  </DashBoard>
);

Main.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
