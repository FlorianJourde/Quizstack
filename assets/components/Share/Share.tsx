import React, {useEffect, useRef, useState} from 'react';
import QuestionContent from "../Question/QuestionContent";
import Choices from "../Question/Choices";
import {QuestionInterface} from "../../types";
import {getQuestion} from "../../services/questionsApi";
import Explanation from "../Question/Explanation";
import Banner from "../Banner/Banner";
import * as htmlToImage from 'html-to-image';

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
            <>
                <div
                    className={`flex absolute bottom-0 justify-end w-full p-spacing-primary gap-4 items-center font-bold text-xl`}>
                    <img src={`/images/pictos/arrow-forward.png`} className={`h-6`} alt="Forward picto"/>
                </div>
            </>
        )
    }


    function Screenshot({onClick}: { onClick: () => void }) {
        return (
            <>
                <div className="buttons-container mb-spacing-primary">
                    <button onClick={onClick} className="button button-tertiary">
                        <span className="material-icons">photo_camera</span>
                    </button>
                </div>
            </>
        )
    }

    const liRefs = useRef<(HTMLLIElement | null)[]>([]);

    const setLiRef = (el: HTMLLIElement | null, index: number) => {
        liRefs.current[index] = el;
    };

    function captureScreenshot(index: number) {
        const currentLi = liRefs.current[index];

        if (currentLi) {
            const elementToCapture = currentLi.querySelector('.screenbox') as HTMLElement;
            console.log(elementToCapture);

            if (elementToCapture) {

                htmlToImage
                    .toJpeg(elementToCapture, {
                        quality: 0.90,
                        pixelRatio: 2,
                        cacheBust: true,
                        skipFonts: false,
                    })
                    .then(function (dataUrl) {
                        let link = document.createElement('a');
                        link.download = 'screenshot.jpeg';
                        link.href = dataUrl;
                        link.click();
                    });
            }
        }
    }

    async function loadQuestion() {
        setLoading(true);
        setAnswers([]);

        try {
            let data: QuestionInterface;
            data = await getQuestion(questionId);
            setQuestion(data);
        } catch (error) {
            console.error('Error loading question:', error);
        } finally {
            setLoading(false);
        }
    }

    return question && (
        <>
            <ul className={`flex flex-col gap-spacing-large-secondary`}>
                <li ref={el => setLiRef(el, 0)}>
                    <Screenshot onClick={() => captureScreenshot(0)}/>
                    <div
                        className="screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]">

                        <Banner/>
                        <div className={`flex flex-col h-full`}>
                            <Header/>
                            <div
                                className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                                <QuestionContent question={question} mode={mode}/>
                            </div>
                            <Footer/>
                            <div className="screenbox-noise-texture"></div>
                        </div>
                    </div>
                </li>

                <li ref={el => setLiRef(el, 1)}>
                    <Screenshot onClick={() => captureScreenshot(1)}/>
                    <div
                        className="screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]">
                        <Banner/>

                        <div className={`flex flex-col h-full`}>
                            <Header/>
                            <div
                                className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                                <Choices
                                    mode={mode}
                                    question={question}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                />
                            </div>
                            <Footer/>
                            <div className="screenbox-noise-texture"></div>
                        </div>
                    </div>
                </li>

                <li ref={el => setLiRef(el, 2)}>
                    <Screenshot onClick={() => captureScreenshot(2)}/>
                    <div
                        className="show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]">
                        <Banner color='green'/>

                        <div className={`flex flex-col h-full`}>
                            <Header/>
                            <div
                                className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                                <Choices
                                    mode={mode}
                                    question={question}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                />
                            </div>
                            <Footer/>
                            <div className="screenbox-noise-texture"></div>
                        </div>
                    </div>
                </li>

                <li ref={el => setLiRef(el, 3)}>
                    <Screenshot onClick={() => captureScreenshot(3)}/>
                    <div
                        className="show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]">
                        <Banner color='green'/>
                        <div className={`flex flex-col h-full`}>
                            <Header/>
                            <div
                                className="zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary">
                                <div className="glass box">
                                    <Explanation question={question}/>
                                </div>
                            </div>
                            <Footer/>
                            <div className="screenbox-noise-texture"></div>
                        </div>
                    </div>
                </li>

                <li ref={el => setLiRef(el, 4)}>
                    <Screenshot onClick={() => captureScreenshot(4)}/>
                    <div
                        className="show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]">
                        <Banner color='green'/>
                        <div className={`flex flex-col h-full`}>
                            <div
                                className="zoom grow justify-center flex flex-col m-spacing-primary">
                                <div
                                    className={`discover flex gap-spacing-primary flex-col h-full w-full max-w-[350px] pt-spacing-large-secondary pl-spacing-large-secondary`}>
                                    <div className={`flex w-full gap-4 items-center font-bold text-xl`}>
                                        <img src={`/images/logos/quizstack-logo.png`} className={`h-11`}
                                             alt="Quizstack logo"/>
                                        <h2 className={`text-4xl`}>Quizstack</h2>
                                    </div>
                                    <h2 className={`text-xl gradient-title font-semibold`}>
                                        Learn web development
                                        through interactive quiz
                                    </h2>
                                    <div className="buttons-container justify-start">
                                        <a className="button button-primary" href="{{ path('quiz') }}">
                                            Play
                                        </a>
                                    </div>
                                </div>
                                <div className={`demo flex flex-col gap-spacing-primary`}>
                                    <QuestionContent question={question} mode={mode}/>
                                    <Choices
                                        mode={mode}
                                        question={question}
                                        answers={answers}
                                        setAnswers={setAnswers}
                                    />
                                </div>
                            </div>
                            <div className="screenbox-noise-texture"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Share;