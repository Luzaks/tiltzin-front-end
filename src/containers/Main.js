import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  DashBoard, SideBar, Dashy,
} from '../styles/StyledComponents';
import Tittle from '../components/Sidebar/Title';
import Footer from '../components/Sidebar/Footer';
import Pages from '../components/Sidebar/Pages';
import dashboardHelper from '../helpers/dashboardHelper';

const Main = ({ loggedInStatus }) => {
  const clicked = useSelector(state => state.pages.clicked);
  const destinies = useSelector(state => state.destinies);
  const selected = useSelector(state => state.selected);

  return (
    <DashBoard>
      {console.log(loggedInStatus)}
      <SideBar>
        <Tittle />
        <Pages />
        <Footer />
      </SideBar>
      <Dashy>
        { dashboardHelper(clicked, destinies, selected) }

      </Dashy>
    </DashBoard>
  );
};

Main.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
