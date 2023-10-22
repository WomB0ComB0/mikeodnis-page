import PropTypes from 'prop-types'
import { cn } from '../../lib/utils'
import './Footer.css'

export default function Footer({ children, className, style }) {
  return (
    <footer className={cn('', className)} style={style}>
      {children}
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}