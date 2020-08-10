import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logginCreator } from '../../Redux/actions/actions';
import { PagesConatiner, PagesLink } from '../../styles/StyledComponents';
import pagesHelper from '../../helpers/pagesHelper';

const Pages = ({ history }) => {
  const pagesState = useSelector(state => state.pages.pages);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        const state = {
          status: 'NOT_LOGGED_IN',
          user: {},
        };
        dispatch(logginCreator(state));
        history.push('/');
      }).catch(error => { console.log(error); });
  };

  return (
    <PagesConatiner>
      {pagesState.map(page => (pagesHelper(page, dispatch)))}
      <PagesLink
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
        type="submit"
        onClick={() => {
          handleLogOut();
        }}
      >
        LOGOUT
      </PagesLink>
    </PagesConatiner>
  );
};

Pages.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Pages;
