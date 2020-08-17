import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import deleteSessions from '../../api/deleteSessions';
import { pagesCreator } from '../../Redux/actions/actions';
import { PagesConatiner, PagesLink } from '../../styles/StyledComponents';
import pagesHelper from '../../helpers/pagesHelper';

const Pages = ({ history }) => {
  const pagesState = useSelector(state => state.pages.pages);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    deleteSessions(dispatch, history);
    dispatch(pagesCreator('HOME'));
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
};

export default Pages;
