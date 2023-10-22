import { NavBar, FooterBar } from '../custom/index'
import PropTypes from 'prop-types'
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <FooterBar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}