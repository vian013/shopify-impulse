import React from 'react'
import "./Promo.scss"

function Promo({children}: {children: JSX.Element}) {
  return (
    <div className='promo section'>
      <div className="page-width">
        {children}
      </div>
    </div>
  )
}

export default Promo