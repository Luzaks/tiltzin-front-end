import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  DashBoard, SideBar, Dashy,
} from '../styles/StyledComponents';
import Tittle from '../components/Sidebar/Title';
import Slider from '../components/Dashboard/Slider/Slider';
import Footer from '../components/Sidebar/Footer';
import Pages from '../components/Sidebar/Pages';

const Main = ({ loggedInStatus }) => {
  const clicked = useSelector(state => state.pages.clicked);
  const [click, setClick] = useState('');
  const dispatch = useDispatch();

  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
  ];

  return (
    <DashBoard>
      {console.log(loggedInStatus)}
      <SideBar>
        <Tittle />
        <Pages />
        <Footer />
      </SideBar>
      <Dashy>
        <Slider slides={images} />
      </Dashy>
    </DashBoard>
  );
};

Main.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Main;
