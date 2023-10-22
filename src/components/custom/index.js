import { lazy } from 'react'
const FooterBar = lazy(() =>  import('./NabBar'))
const NavBar = lazy(() =>  import('./FooterBar'))
export {
  FooterBar,
  NavBar
}