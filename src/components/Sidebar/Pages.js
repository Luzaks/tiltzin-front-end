import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PagesConatiner } from '../../styles/StyledComponents';
import pagesHelper from '../../helpers/pagesHelper';

const Pages = () => {
  const pagesState = useSelector(state => state.pages.pages);
  const dispatch = useDispatch();
  return (
    <PagesConatiner>
      {pagesState.map(page => (pagesHelper(page, dispatch)))}
    </PagesConatiner>
  );
};

export default Pages;
