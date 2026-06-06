import React, {useRef, useState} from 'react';
import type {Swiper as SwiperType} from 'swiper';
import QuestionContent from "../Question/QuestionContent";
import Choices from "../Question/Choices";
import {item} from "../../motion/animations";
import {motion} from "motion/react"
import {demoAnswers1, demoQuestion1} from "./demoQuestions/demoQuestion1";
import {demoAnswers2, demoQuestion2} from "./demoQuestions/demoQuestion2";
import {demoAnswers3, demoQuestion3} from "./demoQuestions/demoQuestion3";
import {demoAnswers4, demoQuestion4} from "./demoQuestions/demoQuestion4";
import {demoAnswers5, demoQuestion5} from "./demoQuestions/demoQuestion5";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';

export function Demo({mode}) {
    const questionsData = [
        {question: demoQuestion1, answers: demoAnswers1},
        {question: demoQuestion2, answers: demoAnswers2},
        {question: demoQuestion3, answers: demoAnswers3},
        {question: demoQuestion4, answers: demoAnswers4},
        {question: demoQuestion5, answers: demoAnswers5}
    ];
    const swiperRef = useRef<SwiperType | null>(null);
    const [buttonTop, setButtonTop] = useState(120);

    const updateButtonPosition = (swiper: SwiperType) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const glassBox = activeSlide?.querySelector('.glass.box');
        if (glassBox) {
            setButtonTop((glassBox as HTMLElement).offsetHeight);
        }
    };

    return (
        <>
            <div className={`buttons-container z-10 absolute right-0 -mt-[calc(var(--spacing-primary)+2px)] translate-x-1/2 -translate-y-full -mb-0.5 transition-all duration-300`} style={{top: buttonTop}}>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={`button button-action bg-very-dark-grey-primary opacity-100 fade-in-up`}
                >
                    <span className="material-icons text-[14px] sm:text-[24px]">arrow_forward</span>
                </button>
            </div>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    updateButtonPosition(swiper);
                }}
                onSlideChange={updateButtonPosition}
                speed={1000}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={`-m-spacing-primary`}
            >
                {questionsData.map((data, index) => (
                    <SwiperSlide key={data.question.id}>
                        <motion.div
                            key={data.question.id}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={item}
                            className="flex flex-col relative"
                        >
                            <div className="flex flex-col gap-spacing-primary m-spacing-primary">
                                <QuestionContent
                                    question={data.question}
                                    mode={mode}
                                />
                                <Choices
                                    mode={mode}
                                    question={data.question}
                                    answers={data.answers}
                                />
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Demo;