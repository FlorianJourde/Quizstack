import React from 'react';
// import {Autoplay} from "swiper/types/modules";
// import {Swiper, SwiperSlide} from "swiper/swiper-react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Autoplay} from 'swiper/modules';
import {motion} from "motion/react";
import {item} from "../motion/animations";
import QuestionContent from "./QuestionContent";
import Choices from "./Choices";
// import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';

function StacksSlider() {
    return (
        <>
            <Swiper

                modules={[Autoplay]}
                spaceBetween={30}
                // freeMode={true}
                // slidesPerView={10}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                    waitForTransition: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 10,
                        spaceBetween: 30,
                    },
                    1536: {
                        slidesPerView: 12,
                        spaceBetween: 30,
                    },
                }}

                // speed={1000}
                // // spaceBetween={50}
                // breakpoints={{
                //     0: {
                //         // spaceBetween: 24,
                //     },
                //     640: {
                //         // spaceBetween: 32,
                //
                //     },
                // }}
                // slidesPerView={10}
                // loop={true}
                // centeredSlides={true}
                // // grabCursor={true}
                // autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: false,
                // }}
                // modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src={`/images/logos/css3-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/javascript-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/docker-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/next-js-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/react-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/sass-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/symfony-logo-2.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/tailwindcss-logo.png`} alt=""/>
                </SwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    <img src={`/images/logos/tailwindcss-logo.png`} alt=""/>*/}
                {/*</SwiperSlide>*/}
                <SwiperSlide>
                    <img src={`/images/logos/vue-js-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/git-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/node-js-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/typescript-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/django-logo-2.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/angular-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/laravel-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/mysql-logo.png`} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/github-logo.png`} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default StacksSlider;