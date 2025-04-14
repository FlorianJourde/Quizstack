import React, {useEffect, useState} from 'react';
import {getRandomQuestion, getQuestion, submitAnswers} from "../services/questionsApi";
import Choices from "./Choices";
import Explanation from "./Explanation";
import CommentList from "./Comment/CommentList";
import {MarkdownRenderer} from "./MarkdownRenderer";
import {QuestionInterface, QuestionOrLimitReached} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";
import LimitReachedComponent from "./LimitReachedComponent";
import Loading from "./Loading";
import Banner from "./Banner";

function Question({mode, questionId, showComments}: { mode: string, questionId: number, showComments: boolean }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);
    const [limitReached, setLimitReached] = useState<boolean>(false);

    useEffect(() => {
        console.log(question)
    }, [question]);

    useEffect(() => {
        // console.log(answers)
    }, [answers]);

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
        loadQuestion();
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

    if (limitReached) return <LimitReachedComponent/>;
    if (loading) return <Loading/>;
    if (!question) return <div>Question not found..</div>;

    return (
        <>
            <div className="wrapper">
                <div className="flex flex-col gap-4">

                    <div className="glass p-4">

                        {/*<h2 className={'text-3xl'}>Question</h2>*/}
                        {/*<p>ID : {question.id}</p>*/}

                        <p>Difficulty : {question.difficulty}</p>

                        <MarkdownRenderer content={question.content}/>

                        {question.numberOfCorrectChoices > 1 && <p>Multiple choices possible.</p>}

                        {/*<p>Number of correct choices : {question.numberOfCorrectChoices}</p>*/}

                        {question.correctChoices && (
                            // <>
                            <Explanation question={question}/>

                        )}

                    </div>

                    <ul>
                        <Choices question={question} answers={answers} setAnswers={setAnswers}/>
                    </ul>

                    {/*{mode === 'game' && (*/}
                    {/*    <button onClick={handleSubmit}>*/}
                    {/*        Validate*/}
                    {/*    </button>*/}
                    {/*)}*/}

                    {mode === 'game' && (
                        <div className={'buttons-container flex gap-4 justify-end'}>
                            {question.correctChoices ? (
                                <button onClick={handleNextQuestion}>
                                    Next question
                                    <span className="material-icons">arrow_forward</span>
                                </button>
                            ) : (
                                <button className={'btn btn-primary'} onClick={handleSubmit}>
                                    Validate
                                    <span className="material-icons">done</span>
                                    {/*<span className="material-symbols-outlined">arrow_forward</span>*/}
                                    {/*<span className="material-icons md-24">face</span>*/}
                                </button>
                            )}
                        </div>
                    )}

                    {question.correctChoices && (
                        <>
                            {/*<Explanation question={question}/>*/}


                            {showComments && (
                                <CommentList question={question} setQuestion={setQuestion}/>
                            )}

                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default Question;
