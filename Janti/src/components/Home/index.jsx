import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "./style.css";

import { Navigation, EffectCoverflow } from 'swiper/modules';

function Home() {
  return (
    <div className="home-container">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        spaceBetween={-500}
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="home-content">
            {/* Video Oynatıcı */}
            <div className="video-container">
              <video className="home-video" loop autoPlay>
                <source src="video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><img src='wedding.jpg' className='slider-img' /></SwiperSlide>
        <SwiperSlide><img src='wedding.jpg' className='slider-img' /></SwiperSlide>
        <SwiperSlide><img src='wedding.jpg' className='slider-img' /></SwiperSlide>
        <SwiperSlide><img src='wedding.jpg' className='slider-img' /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
