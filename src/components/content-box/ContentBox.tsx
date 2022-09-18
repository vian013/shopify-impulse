import React from 'react'
import ShopButton from '../shop-btn/ShopButton'
import "./ContentBox.scss"

type Props = {
    subTitle?: string, 
    title: string, 
    children: JSX.Element, 
    btnText: string
}

function ContentBox({subTitle, title, children, btnText}: Props) {
  return (
    <div className="content-box">
        <p className="subtitle">{subTitle}</p>
        <p className="title">{title}</p>
        <div className="description">{children}</div>
        <ShopButton
        link='/'
        >{btnText}</ShopButton>
    </div>
  )
}

export default ContentBox