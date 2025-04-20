import React, {useEffect, useState} from 'react';
import {getRandomQuestion, getQuestion, submitAnswers} from "../services/questionsApi";
import Choices from "./Choices";
import Explanation from "./Explanation";
import CommentList from "./Comment/CommentList";
import {MarkdownRenderer} from "./MarkdownRenderer";
import {QuestionInterface, QuestionOrLimitReached} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";
import LimitReached from "./LimitReached";
import Loading from "./Loading";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import QuestionNotFound from "./QuestionNotFound";
import {motion, AnimatePresence} from "motion/react"
import {transform} from "motion";
import {item} from "../motion/animations";
import Image from "./Image";

function Question({mode, questionId, showComments}: { mode: string, questionId: number, showComments: boolean }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);
    const [limitReached, setLimitReached] = useState<boolean>(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // console.log(question)
    }, [question]);

    useEffect(() => {
        loadQuestion();
    }, []);

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
        // loadQuestion();
    }

    async function handleSubmit() {
        try {
            const result: QuestionInterface = await submitAnswers(question?.id, answers);
            // console.log(result);
            if (question) {
                setQuestion({
                    ...question,
                    correctChoices: result.correctChoices,
                    isMatch: result.isMatch
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
            className="flex flex-col gap-8">
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

                        {/*{mode === 'game' && <Sidebar loadQuestion={loadQuestion} isLoading={loading}/>}*/}
                        {mode === 'game' && <Sidebar onNext={handleNextQuestion} isLoading={loading}/>}

                        {/*<AnimatePresence>*/}
                        <div

                            className="flex flex-col gap-8">

                            <div
                                className="glass box"
                            >
                                <div
                                    className="question-header-container flex gap-8 justify-between items-center mb-4">
                                    <ul className={`tags-container grow-1`}>
                                        {question.categories.map((category, index) => (
                                            <li key={`category-${index}`}>
                                                <span className={`tag tag-small`}>{category.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`flex items-end gap-1`}>
                                        {Array(3).fill(null).map((_, index) => {
                                            const heightClass = index === 0 ? 'h-3' : index === 1 ? 'h-4' : 'h-5';
                                            const opacityClass = index < question?.difficulty ? 'opacity-100' : 'opacity-50';

                                            return (
                                                <span
                                                    className={`rounded-sm w-1.5 bg-white/75 ${heightClass} ${opacityClass}`}
                                                    key={index}
                                                ></span>
                                            );
                                        })}
                                    </div>
                                </div>

                                <MarkdownRenderer content={question.content}/>

                                {question.numberOfCorrectChoices > 1 &&
                                    <p className={'opacity-50 text-sm mt-4'}>Multiple choices possible.</p>
                                }

                                {question.image && <Image image={question.image}/>}

                                {question.correctChoices && <Explanation question={question}/>}


                            </div>
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
