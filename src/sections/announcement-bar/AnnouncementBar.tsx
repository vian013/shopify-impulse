import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import announcements from './announcements'
import "./AnnouncementBar.scss"
import "swiper/css"
import { Autoplay } from 'swiper'

function AnnouncementBar({delay}: {delay?: number}) {
  return (
    <div className='announcement-bar'>
        <Swiper
            modules={[Autoplay]}
            autoplay={{delay: delay?delay:5000}}
        >
            {announcements.map(({title, subTitle}, index) => (
                <SwiperSlide key={index}>
                    <div className="annoucement-wrapper">
                        <div className="title">{title}</div>
                        <div className="sub-title">{subTitle}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default AnnouncementBar