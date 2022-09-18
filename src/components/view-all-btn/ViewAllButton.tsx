import React from 'react'
import { Link } from 'react-router-dom'
import "./ViewAllButton.scss"

function ViewAllButton({link}: {link: string}) {
  return (
    <div className="view-all-wrapper">
      <Link className='view-all-btn' to={link }>view all</Link>
    </div>
  )
}

export default ViewAllButton