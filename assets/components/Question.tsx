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

function Question({mode, questionId, showComments}: { mode: string, questionId: number, showComments: boolean }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);
    const [limitReached, setLimitReached] = useState<boolean>(false);

    useEffect(() => {
        console.log(question)
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
        loadQuestion();
    };

    async function handleSubmit() {
        try {
            const result: QuestionInterface = await submitAnswers(question?.id, answers);
            if (question) {
                setQuestion({
                    ...question,
                    correctChoices: result.correctChoices
                });
            }
        } catch (error) {
            console.error('Error submitting answers : ', error);
        }
    };

    if (limitReached) return <LimitReachedComponent/>;
    if (loading) return <Loading/>;
    if (!question) return <div>Question not found..</div>;

    return (
        <>
            <br/>
            <br/>

            <h2 className={'text-3xl'}>Question</h2>
            <p>ID : {question.id}</p>
            <MarkdownRenderer content={question.content}/>
            <p>Difficulty : {question.difficulty}</p>
            <p>Number of choices : {question.numberOfCorrectChoices}</p>
            {question.numberOfCorrectChoices > 1 && <p>Multiple choices possible.</p>}
            <br/>

            <ul>
                <Choices mode={mode} question={question} answers={answers} setAnswers={setAnswers}/>
            </ul>

            <br/>
            {mode === 'game' && (
                <button onClick={handleSubmit}>
                    Validate
                </button>
            )}


            <br/>
            <br/>

            {question.correctChoices && (
                <>
                    <Explanation question={question}/>

                    {mode === 'game' && (
                        <button onClick={handleNextQuestion}>
                            Next question
                        </button>
                    )}

                    {showComments && (
                        <CommentList question={question} setQuestion={setQuestion}/>
                    )}

                </>
            )}

        </>
    )
}

export default Question;
