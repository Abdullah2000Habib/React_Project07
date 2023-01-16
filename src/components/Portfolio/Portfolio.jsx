import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
import Sidebar from "../../assets/img/sidebar.png";
import style from "./style.module.css";
export default function Portfolio() {
  return (
    <>
        <div className={style.portfolio}>
          {/* heading */}
          <span>Recent Projects</span>
          <span>Portfolio</span>
          {/* Slider */}
          <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className={style.portfolioSlider}
          >
            <SwiperSlide>
              <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HOC} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}
