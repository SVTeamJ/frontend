import React, { lazy } from 'react';
import GlobalLayout from './page/_layout';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [],
  },
];

export const pages = [{ route: '/' }];
