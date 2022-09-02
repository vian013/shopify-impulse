import React from 'react'
import { Link } from 'react-router-dom'
import messages from '../../static/messages'
import "./TextBanner.scss"

function TextBanner() {
    const {message1, message2, message3} = messages.sections.textBanner
    
  return (
    <div className='text-banner section'>
      <div className="content-wrapper">
        <p>{message1}</p>
          <p className='message-2'>{message2}</p><Link className='vendor-name' to={"/"}>{message3}</Link>
        </div>
    </div>
  )
}

export default TextBanner