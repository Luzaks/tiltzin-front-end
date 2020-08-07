import React from 'react';
import { PagesLink } from '../styles/StyledComponents';

const pagesHelper = page => (
  <PagesLink key={page}>{page}</PagesLink>
);

export default pagesHelper;
