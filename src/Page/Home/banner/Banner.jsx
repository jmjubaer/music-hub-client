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
import { Fade, Slide,Zoom  } from "react-awesome-reveal";

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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper jm_container_lg"
      >
        <SwiperSlide>
        <div className={`min-h-fit h-[100vh] max-h-[800px] overflow-hidden ${theme === "dark" && "dark"}`}>
              <img className='' src={image1} alt="" />
              <div className="slider_overlay py-5 overflow-hidden">
                  <div className="md:w-2/3 w-11/12 text-center md:text-left left-4 absolute md:left-20 top-1/2 -translate-y-1/2">
                      <Slide className='hidden md:block'>
                          WELL COME IN MUSIC HUB
                      </Slide>
                      <div className="hidden md:block">
                        <Fade className='text-3xl lg:text-4xl leading-tight' delay={1e2} cascade damping={1e-1}>Embark on a Melodic Journey at Music Hub.
                        </Fade>
                      </div>
                      <h2 className='leading-tight text-3xl md:hidden'>Embark on a Melodic Journey at Music Hub</h2>
                      <p className='mt-8'>Welcome to Music Hub, the premier destination for aspiring musicians of all ages and skill levels. Discover a world of melody, rhythm, and harmony as you embark on a musical journey like no other. Whether you're a beginner eager to learn the basics or a seasoned performer looking to refine your craft.</p>
                      <div className="flex mx-auto w-fit md:w-full flex-wrap gap-5 mt-5">
                        <a href='#class' className='jm_btn border-2 rounded-lg'>Discover</a>
                        <button className='jm_btn_outline'>Contact us</button>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`h-[100vh] max-h-[800px] overflow-hidden ${theme === "dark" && "dark"}`}>
              <img src={image2} alt="" />
              <div className="slider_overlay overflow-hidden">
                  <div className="w-2/3 absolute left-20 top-1/2 -translate-y-1/2">
                  <Slide className='hidden lg:block'>
                      WELL COME IN MUSIC HUB
                  </Slide>
                    <Fade className='text-5xl hidden lg:block leading-tight' delay={1e2} cascade damping={1e-1}>
                    Join the Musical Revolution at Music Hub
                    </Fade>
                      <p className='mt-8'>Immerse yourself in a vibrant community of fellow music enthusiasts, where creativity flourishes and lifelong friendships are forged. From classical compositions to contemporary hits, our diverse curriculum covers a myriad of genres, ensuring a well-rounded education in music theory, instrument mastery, vocal technique, and performance skills.</p>
                      <div className="flex gap-8 mt-5">
                        <a href='#class' className='jm_btn border-2 rounded-lg'>Discover</a>
                        <button className='jm_btn_outline'>Contact us</button>
                      </div>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`h-[100vh] max-h-[800px] overflow-hidden ${theme === "dark" && "dark"}`}>
              <img src={image3} alt="" />
              <div className="slider_overlay overflow-hidden">
                  <div className="w-2/3 absolute left-20 top-1/2 -translate-y-1/2">
                    <Slide className='hidden lg:block'>
                        WELL COME IN MUSIC HUB
                    </Slide>
                    <Fade className='text-5xl hidden lg:block leading-tight w-[100px]' delay={1e2} cascade damping={1e-1}>
                    Unlock Your Musical Potential at Music Hub
                    </Fade>
                    <p className='mt-8'>At Music Hub, we believe in fostering a nurturing and supportive environment that encourages self-expression and fosters a love for music. Our state-of-the-art facilities and cutting-edge technology provide the perfect backdrop for immersive learning experiences. </p>
                      <div className="flex gap-8 mt-8">
                        <a href='#class' className='jm_btn border-2 rounded-lg'>Discover</a>
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