import React, {useEffect, useRef, useState} from 'react';
import QuestionContent from "../Question/QuestionContent";
import Choices from "../Question/Choices";
import {QuestionInterface} from "../../types";
import {getQuestion} from "../../services/questionsApi";
import Explanation from "../Question/Explanation";
import Banner from "../Banner/Banner";
import * as htmlToImage from 'html-to-image';
import Instagram from "./Social/Instagram";
import Twitter from "./Social/Twitter";

export function Share({questionId, mode, social}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);

    useEffect(() => {
        loadQuestion();
    }, []);

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
                    })
                    .catch(function (error) {
                        console.error('Error while taking screenshot :', error);
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
        social === 'twitter' ? (
            <Twitter
                question={question}
                mode={mode}
                answers={answers}
                setAnswers={setAnswers}
                setLiRef={setLiRef}
                captureScreenshot={captureScreenshot}
                Header={Header}
                Footer={Footer}
                Screenshot={Screenshot}
            />
        ) : (
            <Instagram
                question={question}
                mode={mode}
                answers={answers}
                setAnswers={setAnswers}
                setLiRef={setLiRef}
                captureScreenshot={captureScreenshot}
                Header={Header}
                Footer={Footer}
                Screenshot={Screenshot}
            />
        )
    );
};

export default Share;