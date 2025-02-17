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
      <video className="home-video" loop autoPlay muted>
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
