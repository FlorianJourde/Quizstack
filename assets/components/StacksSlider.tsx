import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';

function StacksSlider() {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                speed={8000}
                allowTouchMove={false}
                preventClicks={true}
                simulateTouch={false}
                touchStartPreventDefault={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                    waitForTransition: true,
                }}
                slidesPerView={'auto'}
                freeMode={true}
                breakpoints={{
                    641: {
                        spaceBetween: 80,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={`/images/logos/css3-logo.png`} alt="CSS logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/javascript-logo.png`} alt="JavaScript logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/docker-logo.png`} alt="Docker logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/next-js-logo.png`} alt="Next.js logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/react-logo.png`} alt="React logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/html-logo.png`} alt="HTML logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/sass-logo.png`} alt="Sass logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/symfony-logo-2.png`} alt="Symfony logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/tailwindcss-logo.png`} alt="TailwindCSS logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/vue-js-logo.png`} alt="Vue.js logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/wordpress-logo.png`} alt="Wordpress logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/python-logo.png`} alt="Python logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/git-logo.png`} alt="Git logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/node-js-logo.png`} alt="Node.js logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/php-logo.png`} alt="PHP logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/typescript-logo.png`} alt="TypeScript logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/django-logo.png`} alt="Django logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/angular-logo.png`} alt="Angular logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/twig-logo.png`} alt="Twig logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/github-logo.png`} alt="GitHub logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/laravel-logo.png`} alt="Laravel logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/mysql-logo.png`} alt="MySQL logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/express-logo.png`} alt="ExpressJS logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`/images/logos/gitlab-logo.png`} alt="GitLab logo"/>
                </SwiperSlide>
            </Swiper>
        </>
    )
        ;
};

export default StacksSlider;