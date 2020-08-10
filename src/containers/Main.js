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

const Main = ({ history }) => {
  const clicked = useSelector(state => state.pages.clicked);
  const destinies = useSelector(state => state.destinies);
  const selected = useSelector(state => state.selected);
  const tripsState = useSelector(state => state.trips);
  const loggedState = useSelector(state => state.loggedIn.user);

  return (
    <DashBoard>
      <SideBar>
        <Tittle />
        <Pages history={history} />
        <Footer />
      </SideBar>
      <Dashy>
        { dashboardHelper(clicked, destinies, selected, tripsState, loggedState) }
      </Dashy>
    </DashBoard>
  );
};

Main.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
