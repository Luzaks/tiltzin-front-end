import React from 'react';
import { useSelector } from 'react-redux';
import { PagesConatiner } from '../../styles/StyledComponents';
import pagesHelper from '../../helpers/pagesHelper';

const Pages = () => {
  const pagesState = useSelector(state => state.pages.pages);

  return (
    <PagesConatiner>
      {pagesState.map(page => (pagesHelper(page)))}
    </PagesConatiner>
  );
};

export default Pages;
