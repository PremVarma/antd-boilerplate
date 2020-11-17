import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Gallery = lazy(() => import('../../container/pages/Gallery'));
const GalleryTwo = lazy(() => import('../../container/pages/GalleryTwo'));

const GalleryRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/one`} component={Gallery} />
      <Route path={`${path}/two`} component={GalleryTwo} />
    </Switch>
  );
};

export default GalleryRoute;
