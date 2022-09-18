import React from 'react'
import ContentBox from '../../components/content-box/ContentBox'
import ShopButton from '../../components/shop-btn/ShopButton'
import messages from '../../static/messages'
import "./BackgroundImageText.scss"

function BackgroundImageText() {
  const {bgImage ,btnText, description, subTitle, title} = messages.sections.backgroundImageText
  const style = {
    backgroundImage: `url(${bgImage}`
  }

  return (
    <div className='background-image-text section'>
        <div className="background-img" style={style}>
            {/* <div className="content-wrapper">
              <p className="subtitle">{subTitle}</p>
              <p className="title">{title}</p>
              <p className="description">{description}</p>
              <ShopButton
                link='/'
              >{btnText}</ShopButton>
            </div> */}
            <ContentBox 
              title={title}
              btnText={btnText}
            >
              <p>{description}</p>
            </ContentBox>
        </div>
    </div>
  )
}

export default BackgroundImageText