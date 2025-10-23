import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
    'https://images.unsplash.com/photo-1588032215063-646feee2e1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
    'https://plus.unsplash.com/premium_photo-1683133780970-98db7131a20f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1595521355985-bd4341ac89a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1698632196437-f72ea03b831f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1252'

];

const Slider = () => {
    return (
        <Swiper
            direction="vertical"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper w-full h-[800px]" // adjust height as needed
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
