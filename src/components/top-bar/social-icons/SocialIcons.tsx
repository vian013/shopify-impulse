import React from 'react'
import { Link } from 'react-router-dom'
import socialIcons from './social-icons'
import parser from 'html-react-parser'
import "./SocialIcons.scss"

function SocialIcons() {
  return (
    <div className='social-icons'>
        {socialIcons.map(({link, svgContent}) => (
            <a className='social-icon' target="_blank" href={link}>{parser(svgContent)}</a>
        ))}
    </div>
  )
}

export default SocialIcons