import "./Slide.scss"
import { SlideType } from "../Slider"

function Slide({slide, styleNum, children}: {slide: SlideType, styleNum: number, children: JSX.Element}) {
  const {imgSrc, imgAlt, title, subTitle} = slide
  
  return (
    <div className="slide-container">
      <div className="img-wrapper">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={`content-wrapper style--${styleNum}`}>
        <div className="title-wrapper">
          <h1 className="title">{title}</h1>
        </div>
        {subTitle && (
          <div className="sub-title-wrapper">
            <p className="sub-title">{subTitle}</p>
          </div>
        )}
        <div className="btn-wrapper">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Slide