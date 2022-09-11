import { link } from 'fs'
import React from 'react'
import { Link } from 'react-router-dom'
import "./ImageWithTextDiscount.scss"

function ImageWithTextDiscount({link, title, discountAmount, img1, img2}: {link: string, title: string, discountAmount: string, img1: string, img2: string}) {
  return (
    <Link to={link}>
        <div className='image-with-text-discount'>
            <div className="container">
                <div className="content-container">
                    <div className="content-wrapper">
                        <p className='subtitle'>up to</p>
                        <div className="discount-wrapper">
                            <p className='discount-amount'>{discountAmount}</p>
                            <div className="percent-wrapper">
                                <p>%</p>
                                <p>off</p>
                            </div>
                        </div>
                        <p className="title">{title}</p>
                    </div>
                </div>
                <div className="images-wrapper">
                    <div className="img-wrapper">
                        <img src={img1}/>
                    </div>
                    <div className="img-wrapper">
                        <img src={img2}/>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ImageWithTextDiscount