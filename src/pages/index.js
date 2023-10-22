import { lazy } from 'react';
const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))
export {
  Home,
  NotFound
}