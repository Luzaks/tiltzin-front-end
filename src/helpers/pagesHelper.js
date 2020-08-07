import React from 'react';
import { Holdable } from 'react-touch';
import { pagesCreator } from '../Redux/actions/actions';
import { PagesLink } from '../styles/StyledComponents';

const pagesHelper = (page, dispatch) => (
  <PagesLink
    onClick={() => {
      dispatch(pagesCreator(page));
    }}
    key={page}
  >
    {page}
  </PagesLink>
);

export default pagesHelper;
