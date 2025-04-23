import React, {useEffect} from 'react';
import QuestionContent from "./QuestionContent";
// import {demoAnswers1, demoQuestion1} from "./Demo/demoQuestion1";
import Choices from "./Choices";
import {item} from "../motion/animations";
import {motion, AnimatePresence} from "motion/react"
import {demoAnswers1, demoQuestion1} from "./Demo/demoQuestion1";
import {demoAnswers2, demoQuestion2} from "./Demo/demoQuestion2";
import {demoAnswers3, demoQuestion3} from "./Demo/demoQuestion3";
import {demoAnswers4, demoQuestion4} from "./Demo/demoQuestion4";
import {demoAnswers5, demoQuestion5} from "./Demo/demoQuestion5";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {EffectCards} from 'swiper/modules';


export function Demo({mode}) {
    useEffect(() => {
        console.log(demoQuestion1)
    }, [demoQuestion1]);

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
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                // effect={'cards'}
                className={`max-w-[800px] ml-auto mr-auto`}
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
                            <div className="flex flex-col gap-8">
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

            {/*<motion.div*/}
            {/*    key={demoQuestion1.id}*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    exit="hidden"*/}
            {/*    variants={item}*/}

            {/*    className="flex flex-col relative">*/}

            {/*    <div className="flex flex-col gap-8">*/}
            {/*        <QuestionContent question={demoQuestion1}/>*/}
            {/*        <Choices mode={mode} question={demoQuestion1} answers={demoAnswers1}/>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    key={demoQuestion2.id}*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    exit="hidden"*/}
            {/*    variants={item}*/}

            {/*    className="flex flex-col relative">*/}

            {/*    <div className="flex flex-col gap-8">*/}
            {/*        <QuestionContent question={demoQuestion2}/>*/}
            {/*        <Choices mode={mode} question={demoQuestion2} answers={demoAnswers2}/>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    key={demoQuestion3.id}*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    exit="hidden"*/}
            {/*    variants={item}*/}

            {/*    className="flex flex-col relative">*/}

            {/*    <div className="flex flex-col gap-8">*/}
            {/*        <QuestionContent question={demoQuestion3}/>*/}
            {/*        <Choices mode={mode} question={demoQuestion3} answers={demoAnswers3}/>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    key={demoQuestion3.id}*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    exit="hidden"*/}
            {/*    variants={item}*/}

            {/*    className="flex flex-col relative">*/}

            {/*    <div className="flex flex-col gap-8">*/}
            {/*        <QuestionContent question={demoQuestion3}/>*/}
            {/*        <Choices mode={mode} question={demoQuestion3} answers={demoAnswers3}/>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

            {/*<motion.div*/}
            {/*    key={demoQuestion4.id}*/}
            {/*    initial="hidden"*/}
            {/*    animate="visible"*/}
            {/*    exit="hidden"*/}
            {/*    variants={item}*/}

            {/*    className="flex flex-col relative">*/}

            {/*    <div className="flex flex-col gap-8">*/}
            {/*        <QuestionContent question={demoQuestion4}/>*/}
            {/*        <Choices mode={mode} question={demoQuestion4} answers={demoAnswers4}/>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}

        </>

    );
};

export default Demo;