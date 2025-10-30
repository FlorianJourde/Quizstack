import React from 'react';
import Banner from "../../Banner/Banner";
import QuestionContent from "../../Question/QuestionContent";
import Choices from "../../Question/Choices";
import Explanation from "../../Question/Explanation";
import {QuestionInterface} from "../../../types";

interface TwitterProps {
    question: QuestionInterface;
    mode: string;
    answers: number[];
    setAnswers: React.Dispatch<React.SetStateAction<number[]>>;
    setLiRef: (el: HTMLLIElement | null, index: number) => void;
    captureScreenshot: (index: number) => void;
    Header: React.ComponentType;
    Footer: React.ComponentType;
    Screenshot: React.ComponentType<{ onClick: () => void }>;
}

function Twitter({
                     question,
                     mode,
                     answers,
                     setAnswers,
                     setLiRef,
                     captureScreenshot,
                     Header,
                     Footer,
                     Screenshot
                 }: TwitterProps) {
    return (
        <ul className={`flex flex-col gap-spacing-large-secondary`}>
            <li ref={el => setLiRef(el, 0)}>
                <Screenshot onClick={() => captureScreenshot(0)}/>
                <div
                    className="screenbox flex flex-col justify-center overflow-hidden relative outline outline-2 outline-[#ffffff1a]">
                    <Banner/>
                    <div className={`flex flex-col h-full`}>
                        <Header/>
                        <div
                            className="zoom big grow justify-center flex flex-col gap-spacing-primary mx-spacing-primary mt-spacing-very-large-tertiary mb-[5rem]">
                            <QuestionContent question={question} mode={mode}/>
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
                    className="show-answers screenbox flex flex-col justify-center overflow-hidden relative outline outline-2 outline-[#ffffff1a]">
                    <Banner color='green'/>

                    <div className={`flex flex-col h-full`}>
                        <Header/>
                        <div
                            className="zoom big grow justify-center flex flex-col gap-spacing-primary mx-spacing-primary mt-spacing-very-large-tertiary mb-[5rem]">
                            <div className="glass box">
                                <Explanation question={question}/>
                            </div>
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
                                    <a className="button button-primary" href="/quiz">
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
    );
}

export default Twitter;