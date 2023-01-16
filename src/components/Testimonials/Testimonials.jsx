import React from 'react';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import clients from './data';
import "./sliderstyle.css";
import style from "./style.module.css";
export default function Testimonials() {
return (
    <>
        <div className={style.wrapper} id='testimonials'>
            <div className={style.heading}>
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className={`blur ${style.tBlur1}`} style={{ background: "var(--purple)" }}></div>
                <div className={`blur ${style.tBlur2}`} style={{ background: "skyblue" }}></div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client) => {
                return (
                    <SwiperSlide key={client.id}>
                    <div className={style.testimonial}>
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
        </div>
    </>
)
}
