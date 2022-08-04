import React, { Component } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import Slide from './slide/Slide'
import "swiper/css/pagination"
import slides from '../../static/slides'
import ShopButton from '../shop-btn/ShopButton'
import "./Slider.scss"

export type SlideType = {
  imgSrc: string,
  imgAlt: string,
  title: string,
  subTitle?: string,
}

export class Slider extends Component {
  render() {
    return (
      <div>
        <Swiper 
        modules={[Pagination, Autoplay]}
        pagination={{clickable: true}}
        // autoplay={{delay: 2000}}
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <Slide slide={slides[0]} styleNum={1}>
                <ShopButton link="/">shop top</ShopButton>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide slide={slides[1]} styleNum={2}>
                <>
                  <ShopButton link="/">shop top</ShopButton>
                  <ShopButton link="/">shop all</ShopButton>
                </>
              </Slide>
            </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

export default Slider