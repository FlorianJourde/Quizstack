import React, {useEffect, useState} from 'react';
import {getQuestion, submitAnswers} from "../services/questionsApi";
import Choices from "./Choices";
import Explanation from "./Explanation";
import Comments from "./Comments";
import {MarkdownRenderer} from "./MarkdownRenderer";
import {QuestionInterface, QuestionOrLimitReached, ResultInterface} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";
import LimitReachedComponent from "./LimitReachedComponent";
import Loading from "./Loading";

function Question() {
    const [loading, setLoading] = useState<boolean>(true);
    const [answers, setAnswers] = useState<number[]>([]);
    const [result, setResult] = useState<ResultInterface | null>(null);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [limitReached, setLimitReached] = useState<boolean>(false);

    useEffect(() => {
        // console.log(question)
    }, [question]);

    useEffect(() => {
        loadQuestion();
    }, []);

    async function loadQuestion() {
        setLoading(true);
        setAnswers([]);
        setResult(null);

        const urlFilters = searchForParams();

        try {
            const data: QuestionOrLimitReached = await getQuestion(urlFilters);

            if ('limitReached' in data) {
                // console.log(data)
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
            const result = await submitAnswers(question?.id, answers);
            setResult(result);
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
                <Choices result={result} question={question} answers={answers} setAnswers={setAnswers}/>
            </ul>

            <br/>
            <button onClick={handleSubmit}>
                Validate
            </button>

            <br/>
            <br/>

            {result !== null && (
                <>
                    {result && <Explanation explanation={question.explanation}/>}

                    <button onClick={handleNextQuestion}>
                        Next question
                    </button>

                    <Comments question={question} setQuestion={setQuestion}/>
                </>
            )}

        </>
    )
}

export default Question;
