import React from 'react';
import {
  createdCreator,
  pagesCreator,
  selectedCreator,
} from '../Redux/actions/actions';
import { PagesLink } from '../styles/StyledComponents';

const pagesHelper = (page, dispatch) => (
  <PagesLink
    onClick={() => {
      dispatch(pagesCreator(page));
      dispatch(createdCreator(false));
      dispatch(selectedCreator(false, {}));
    }}
    key={page}
  >
    {page}
  </PagesLink>
);

export default pagesHelper;
