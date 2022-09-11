import React from 'react'
import "./ImageWithText.scss"

type Props = {
    frameBorder?: boolean, 
    imgUrl: string, 
    title: string, 
    subtitle?: string, 
    description?: JSX.Element, 
    contentPosition?: string
    children: JSX.Element,
    width: string
}

function ImageWithText({frameBorder, imgUrl, title, subtitle, description, children, contentPosition, width}: Props) {
  return (
    <div className={`image-with-text width--${width}`}>
        <div className={`img-wrapper ${frameBorder?"frame":""}`}>
            <img src={imgUrl} alt={title} loading="lazy"/>
        </div>
        <div className={`content-wrapper ${contentPosition?contentPosition:""}`}>
            {subtitle && <p className='subtitle'>{subtitle}</p>}
            <h1 className='title'>{title}</h1>
            {description && <div className='description'>{description}</div>}
            {children}
        </div>
    </div>
  )
}

export default ImageWithText