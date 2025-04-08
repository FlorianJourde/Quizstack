import React, {useEffect, useState} from 'react';
import {getQuestion, submitAnswers} from "../services/questionsApi";
import Choice from "./Choice";
import Explanation from "./Explanation";
import Comments from "./Comments";
import {MarkdownRenderer} from "./MarkdownRenderer";
import {QuestionInterface, ResultInterface} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";


function Question() {
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState<ResultInterface | null>(null);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);

    useEffect(() => {
        console.log(question)
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
            const data = await getQuestion(urlFilters);
            setQuestion(data);
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
            console.log('TEST')
            setResult(result);
        } catch (error) {
            console.error('Error submitting answers : ', error);
        }
    };

    if (loading) return <div>Chargement...</div>;
    if (!question) return <div>Question non trouvée</div>;

    return (
        <>
            <br/>
            <br/>

            <h2 className={'text-3xl'}>Question</h2>
            <p>ID : {question.id}</p>
            <MarkdownRenderer content={question.content}/>
            <p>Difficulty : {question.difficulty}</p>
            <br/>
            <ul>
                {question.choices.map((choice, index) => (
                    <Choice key={`choice-${choice.id}`} result={result} choice={choice} index={index}
                            answers={answers}
                            setAnswers={setAnswers}/>
                ))}
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

                    <Comments comments={question.comments}/>
                </>
            )}

        </>
    )
}

export default Question;
