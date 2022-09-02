import React from 'react'
import "./ShopButton.scss"

type Props = {link: string, children: string, bgColor?: string}


function ShopButton({link, children, bgColor}: Props) {
  return (
      <a className={`shop-btn ${bgColor?bgColor:""}`} href={link}>{children}</a>
  )
}

export default ShopButton