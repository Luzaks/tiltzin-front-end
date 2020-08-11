import React from 'react';
import { pagesCreator, selectedCreator } from '../Redux/actions/actions';
import { PagesLink } from '../styles/StyledComponents';

const pagesHelper = (page, dispatch) => (
  <PagesLink
    onClick={() => {
      dispatch(pagesCreator(page));
      dispatch(selectedCreator(false, {}));
    }}
    key={page}
  >
    {page}
  </PagesLink>
);

export default pagesHelper;
