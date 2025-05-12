import React, {useEffect, useState} from 'react';
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
import {QuestionInterface, QuestionOrLimitReached} from "../types";
import {getQuestion, getRandomQuestion} from "../services/questionsApi";
import Explanation from "./Explanation";
import Banner from "./Banner";

export function Share({questionId, mode}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);

    useEffect(() => {
        loadQuestion();
    }, []);

    useEffect(() => {
        console.log(question);
    }, [question]);

    function Header() {
        return (
            <div className={`flex absolute w-full p-spacing-primary gap-4 items-center font-bold text-xl`}>
                <img src={`/images/logos/quizstack-logo.png`} className={`h-8`} alt="Quizstack logo"/>
                <h2>Quizstack</h2>
            </div>
        )
    }


    function Footer() {
        return (
            <div className={`flex absolute bottom-0 justify-end w-full p-spacing-primary gap-4 items-center font-bold text-xl`}>
                {/*<img src={`/images/logos/quizstack-logo.png`} className={`h-8`} alt="Quizstack logo"/>*/}
                {/*<h2>Quizstack</h2>*/}
                <span className="material-icons">arrow_forward</span>
            </div>
        )
    }


    async function loadQuestion() {
        setLoading(true);
        setAnswers([]);

        // const urlFilters = searchForParams();

        try {
            let data: QuestionInterface;

            // if (mode === 'display' && questionId > 0) {
            data = await getQuestion(questionId);
            setQuestion(data);

            // answers = await setAnswers(questionId);

            // } else {
            //     data = await getRandomQuestion(urlFilters);
            // }

            // if ('limitReached' in data) {
            //     setLimitReached(true);
            //     return;
            // } else if ('id' in data) {
            //     setQuestion(data);
            // }
        } catch (error) {
            console.error('Error loading question:', error);
        } finally {
            setLoading(false);
        }
    }

    return question && (
        <ul className={`flex flex-col gap-spacing-primary`}>
            <li
                className="flex flex-col justify-center overflow-hidden relative aspect-square border-solid border-2"
            >
                <Banner/>
                <div className={`flex flex-col h-full`}>
                    <Header/>
                    <div className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                        <QuestionContent question={question} mode={mode}/>
                    </div>
                    <Footer/>
                </div>
            </li>

            <li
                className="flex flex-col justify-center overflow-hidden relative aspect-square border-solid border-2"
            >
                <Banner/>

                <div className={`flex flex-col h-full`}>
                    <Header/>
                    <div className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                        <Choices
                            mode={mode}
                            question={question}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    </div>
                    <Footer/>
                </div>
            </li>

            <li
                className="show-answers flex flex-col justify-center overflow-hidden relative aspect-square border-solid border-2"
            >
                <Banner color='green'/>

                <div className={`flex flex-col h-full`}>
                    <Header/>
                    <div className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                        <Choices
                            mode={mode}
                            question={question}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    </div>
                    <Footer/>
                </div>
            </li>

            <li
                className="flex flex-col justify-center overflow-hidden relative aspect-square border-solid border-2"
            >
                <Banner color='green'/>
                <div className={`flex flex-col h-full`}>
                    <Header/>
                    <div className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                        <div className="glass box">
                            {/*<div className="question-header-container flex gap-8 justify-between items-center mb-4">*/}
                            <Explanation question={question}/>
                            {/*</div>*/}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </li>

            {/*    </>*/}
            {/*)}*/}
            {/*</SwiperSlide>*/}
            {/*))}*/}
            {/*</Swiper>*/}
        </ul>
    );
};

export default Share;