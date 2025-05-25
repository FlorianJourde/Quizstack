import React, {useEffect, useState} from 'react';
import {getRandomQuestion, getQuestion, submitAnswers} from "../../services/questionsApi";
import Choices from "./Choices";
import CommentList from "../Comment/CommentList";
import {QuestionInterface, QuestionOrLimitReached} from '../../types';
import {UrlFiltersInterface} from "../../types/urlFilters";
import LimitReached from "../Sections/LimitReached";
import Loading from "../Sections/Loading";
import Sidebar from "./Sidebar";
import QuestionNotFound from "../Sections/QuestionNotFound";
import QuestionContent from "./QuestionContent";
import {motion, AnimatePresence} from "motion/react"
import {item} from "../../motion/animations";

function Question({mode, questionId, showComments}: { mode: string, questionId: number, showComments: boolean }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);
    const [limitReached, setLimitReached] = useState<boolean>(false);
    const [visible, setVisible] = useState(true);
    const [wrap, setWrap] = useState<boolean>(false)

    useEffect(() => {
        loadQuestion();
    }, []);

    useEffect(() => {
        const quizContainer = document.querySelector('#quiz-container');

        if (quizContainer) {
            if (wrap) {
                quizContainer.classList.add('wrap');
            } else {
                quizContainer.classList.remove('wrap');
            }
        }
    }, [wrap]);

    async function loadQuestion() {
        setLoading(true);
        setAnswers([]);

        const urlFilters = searchForParams();

        try {
            let data: QuestionInterface | QuestionOrLimitReached;

            if (mode === 'display' && questionId > 0) {
                data = await getQuestion(questionId);
            } else {
                data = await getRandomQuestion(urlFilters);
            }

            if ('limitReached' in data) {
                setLimitReached(true);
                return;
            } else if ('id' in data) {
                setQuestion(data);
            }
        } catch (error) {
            console.error('Error loading question:', error);
        } finally {
            setLoading(false);
        }
    }

    function searchForParams() {
        const searchParams = new URLSearchParams(window.location.search);
        const urlFilters: UrlFiltersInterface = {};

        if (searchParams.has('difficulty')) {
            urlFilters.difficulty = searchParams.get('difficulty');
        }

        if (searchParams.has('category[]')) {
            urlFilters.categories = searchParams.getAll('category[]');
        }

        return urlFilters;
    }

    function handleNextQuestion() {
        setVisible(false);
    }

    function handleToggleWrap() {
        setWrap(wrap => !wrap);
    }

    async function handleSubmit() {
        try {
            const result: QuestionInterface = await submitAnswers(question?.id, answers);
            if (question) {
                setQuestion({
                    ...question,
                    correctChoices: result.correctChoices,
                    isMatch: result.isMatch
                });

                window.scrollTo({
                    top: 0
                });
            }
        } catch (error) {
            console.error('Error submitting answers : ', error);
        }
    }

    if (limitReached) return <LimitReached/>;
    if (loading) return <Loading/>;
    if (!question) return <QuestionNotFound/>;

    return (
        <div
            className="flex flex-col gap-spacing-primary">
            <AnimatePresence mode='wait'
                             onExitComplete={async () => {
                                 await loadQuestion();
                                 setVisible(true);
                             }}
            >
                {visible && (
                    <motion.div
                        key={question.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={item}
                        className="flex flex-col relative">

                        {mode === 'game' &&
                            <Sidebar onNext={handleNextQuestion} onWrap={handleToggleWrap} wrap={wrap}
                                     isLoading={loading}/>}

                        <div className="flex flex-col gap-spacing-primary mb-spacing-large-secondary xl:mb-0">

                            <QuestionContent question={question} mode={mode}/>

                            <Choices mode={mode} question={question} answers={answers} setAnswers={setAnswers}/>

                            {mode === 'game' && (
                                <div className={'buttons-container'}>
                                    {question.correctChoices ? (
                                        <button className={`button button-tertiary`} onClick={handleNextQuestion}>
                                            Next question
                                        </button>
                                    ) : (
                                        <button className={'button button-tertiary'} onClick={handleSubmit}>
                                            Validate
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {question.correctChoices && showComments && (
                <CommentList question={question} setQuestion={setQuestion}/>
            )}
        </div>
    )
}

export default Question;
