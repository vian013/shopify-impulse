import React, { Component, createRef } from 'react'
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

type Props = {
  delay: number
}

type State = {
  autoplay: boolean,
}

type SwiperRef = {autoplay: {start: Function, stop: Function}} | null

interface WithRef {
  swiperRef: SwiperRef,
}

export class Slider extends Component<Props, State> implements WithRef {
  constructor(props: Props) {
    super(props)
    this.state = {
      autoplay: true,
    }
    this.toggleAutoplay = this.toggleAutoplay.bind(this)
  }
  swiperRef: SwiperRef = null


  toggleAutoplay() {
    this.setState(state => ({autoplay: !state.autoplay}))
  }

  componentDidUpdate() {
    this.state.autoplay ? this.swiperRef!.autoplay.start() : this.swiperRef!.autoplay.stop()
  }
  
  render() {
    return (
      <div>
        <Swiper 
        modules={[Pagination, Autoplay]}
        pagination={{clickable: true}}
        autoplay={{delay: this.props.delay}}
        slidesPerView={1}
        onSwiper={(swiper) => {
          this.swiperRef = swiper
        }}>
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
            <button className='autoplay-btn' onClick={this.toggleAutoplay} slot='container-end'>Autoplay</button>
        </Swiper>
      </div>
    )
  }
}

export default Slider