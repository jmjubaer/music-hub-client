import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './banner.css'
import image1  from '../../../assets/banner/1.jpg'
import image2  from '../../../assets/banner/2.jpg'
import image3  from '../../../assets/banner/3.jpg'
import useAuthContext from '../../../Hooks/UseAuthContext';
const Banner = () => {
    const {theme} = useAuthContext();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className={`h-[120vh] ${theme === "dark" && "dark"}`}>
              <img src={image1} alt="" />
              <div className="slider_overlay">
                  <div className="w-2/3 absolute left-20 top-1/2 -translate-y-1/2">
                      <h2 className='text-5xl leading-tight'>Embark on a Melodic Journey at Music Hub.</h2>
                      <p className='mt-8'>Welcome to Music Hub, the premier destination for aspiring musicians of all ages and skill levels. Discover a world of melody, rhythm, and harmony as you embark on a musical journey like no other. Whether you're a beginner eager to learn the basics or a seasoned performer looking to refine your craft.</p>
                      <div className="flex gap-5 mt-5">
                        <button className='jm_btn border-2 rounded-lg'>Discover</button>
                        <button className='jm_btn_outline'>Contact us</button>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[120vh] ${theme === "dark" && "dark"}`}>
              <img src={image2} alt="" />
              <div className="slider_overlay">
                  <div className="w-2/3 absolute left-20 top-1/2 -translate-y-1/2">
                      <h2 className='text-5xl leading-tight'>Embark on a Melodic Journey at Music Hub.</h2>
                      <p className='mt-8'>Join us at Music Hub, and let the power of music ignite your passion and unlock your true potential. Explore the magic of melodies, the joy of harmonies, and the thrill of performing. Enroll today and embark on a transformative musical adventure that will last a lifetime. Your journey starts here at Music Hub</p>
                      <div className="flex gap-8 mt-5">
                        <button className='jm_btn border-2 rounded-lg'>Discover</button>
                        <button className='jm_btn_outline'>Contact us</button>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`h-[120vh] ${theme === "dark" && "dark"}`}>
              <img src={image3} alt="" />
              <div className="slider_overlay">
                  <div className="w-2/3 absolute left-20 top-1/2 -translate-y-1/2">
                      <h2 className='text-5xl leading-tight'>Embark on a Melodic Journey at Music Hub.</h2>
                      <p className='mt-8'>Join us at Music Hub, and let the power of music ignite your passion and unlock your true potential. Explore the magic of melodies, the joy of harmonies, and the thrill of performing. Enroll today and embark on a transformative musical adventure that will last a lifetime. Your journey starts here at Music Hub!</p>
                      <div className="flex gap-8 mt-8">
                        <button className='jm_btn border-2 rounded-lg'>Discover</button>
                        <button className='jm_btn_outline'>Contact us</button>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    );
};

export default Banner;