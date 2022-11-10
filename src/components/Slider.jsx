import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({Sliderdates}) => {
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {Sliderdates.map((items,index)=>{
            return(
               <SwiperSlide key={index}>
                <div className='slider' style={{backgroundImage: `linear-gradient(to right, #434343 0% ,rgba(0, 0, 0, 0)100%), url(${items.image})`}}>
                <h2>{items.title}</h2>
                <p>{items.text}</p>
                <a href="#">მეტის ნახვა</a>
                </div>
               </SwiperSlide>
            )
        })}
      </Swiper>
      
    </>
  )
}

export default Slider
