// eslint-disable-next-line no-unused-vars
import classnames from 'classnames'
import { Footer } from '../semantics/index'
import './FooterBar.css'
export default function FooterBar() {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <div id="footer-container">
        <p>Made with
          <span>{` `}🩷{` `}</span>
          by{` `}
          <a href='https://github.com/WomB0ComB0' target="_blank" rel='noreferrer noopener'>
            Mike Odnis
          </a>
        </p>
        <p>
          <small>Copywrite © <span id="year">{year}</span> Mike Odnis. All rights reserved</small>
        </p>
      </div>
    </Footer>
  )
}