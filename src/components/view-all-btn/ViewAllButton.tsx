import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import "./ViewAllButton.scss"

type Props = {
  link: string, 
  text?: string, 
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

function ViewAllButton({link, text, handleClick}: Props) {
  
  return (
    <div className="view-all-wrapper">
      {text ? <button className='view-all-btn' onClick={handleClick}>{text}</button> :
      <Link className='view-all-btn' to={link}>view all</Link>
      }
      
    </div>
  )
}

export default ViewAllButton