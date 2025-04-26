import React from 'react';
import QuestionContent from "./QuestionContent";
import Choices from "./Choices";
import {item} from "../motion/animations";
import {motion} from "motion/react"
import {demoAnswers1, demoQuestion1} from "./Demo/demoQuestion1";
import {demoAnswers2, demoQuestion2} from "./Demo/demoQuestion2";
import {demoAnswers3, demoQuestion3} from "./Demo/demoQuestion3";
import {demoAnswers4, demoQuestion4} from "./Demo/demoQuestion4";
import {demoAnswers5, demoQuestion5} from "./Demo/demoQuestion5";
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

    return (
        <>

            <Swiper
                speed={1000}
                // spaceBetween={50}
                breakpoints={{
                    0: {
                        // spaceBetween: 24,
                    },
                    640: {
                        // spaceBetween: 32,

                    },
                }}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                // grabCursor={true}
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
                                <QuestionContent question={data.question}/>
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
};

export default Demo;