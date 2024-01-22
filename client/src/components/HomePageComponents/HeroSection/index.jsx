import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import './index.scss'


const HeroSection = () => {
  return (
    <section>
      
    <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='section text-center font-semibold text-white  hero-section flex justify-center items-center'>
                <h1>Get Your <span className=' bg-main-color text-white px-1'>Education</span> today !</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='section text-center font-semibold text-white  hero-section flex justify-center items-center'>
                <h1>Get Your <span className=' bg-main-color text-white px-1'>Education</span> today !</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='section text-center font-semibold text-white  hero-section flex justify-center items-center'>
                <h1>Get Your <span className=' bg-main-color text-white px-1'>Education</span> today !</h1>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>

    </section>
  )
}

export default HeroSection
