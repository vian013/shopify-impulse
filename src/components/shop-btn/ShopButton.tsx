import React from 'react'
import "./ShopButton.scss"

function ShopButton({link, children}: {link: string, children: string}) {
  return (
    <a className='shop-btn' href={link}>{children}</a>
  )
}

export default ShopButton