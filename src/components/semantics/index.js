import { lazy } from 'react';
const Nav = lazy(() => import('./Nav'));
const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('./Main'));
const Section = lazy(() => import('./Section'));
const Article = lazy(() => import('./Article'));
export { Nav, Footer, Header, Main, Section, Article };