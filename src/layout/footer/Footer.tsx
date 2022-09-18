import React from 'react'
import "./Footer.scss"
import MenusWrapper from './menus-wrapper/MenusWrapper'
import NewsLetterWrapper from './newsletter-wrapper/NewsLetterWrapper'

function Footer() {
  return (
    <footer id='footer'>
      <div className="page-width">
        <div className="content-wrapper">
          <MenusWrapper />
          <NewsLetterWrapper />
        </div>
      </div>
    </footer>
  )
}

export default Footer
