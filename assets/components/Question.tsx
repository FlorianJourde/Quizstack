import React, {useEffect, useState} from 'react';
import {getQuestion, submitAnswers} from "../services/questionsApi";
import Choices from "./Choices";
import Explanation from "./Explanation";
import Comments from "./Comments";
import {MarkdownRenderer} from "./MarkdownRenderer";
import {QuestionInterface, ResultInterface} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";
import {getCookie} from "../utils/cookies";
import LimitReachedComponent from "./LimitReachedComponent";

function Question() {
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState<ResultInterface | null>(null);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);
    const [limitReached, setLimitReached] = useState(false);

    useEffect(() => {
        // console.log(question)
    }, [question]);

    useEffect(() => {
        loadQuestion();
    }, []);

    // useEffect(() => {
    //     // Afficher tous les cookies
    //     console.log('Tous les cookies:', document.cookie);
    //
    //     // Fonction utilitaire pour extraire un cookie spécifique
    //     const getCookieValue = (name) => {
    //         const value = `; ${document.cookie}`;
    //         const parts = value.split(`; ${name}=`);
    //         if (parts.length === 2) return parts.pop().split(';').shift();
    //         return null;
    //     };
    //
    //     // Vérifier votre cookie spécifique
    //     const viewedCount = getCookieValue('viewed_questions_count');
    //     console.log('Cookie viewed_questions_count:', viewedCount);
    //
    //     // Vérifier les en-têtes de la réponse
    //     fetch('/api/question')
    //         .then(response => {
    //             console.log('Headers reçus:', response.headers);
    //             console.log('Response:', response);
    //             // Malheureusement, vous ne pouvez pas voir directement les Set-Cookie avec fetch
    //             return response.json();
    //         })
    //         .catch(error => console.error('Erreur:', error));
    // }, []);

    async function loadQuestion() {
        setLoading(true);
        setAnswers([]);
        setResult(null);

        // const viewedCount = getCookie('viewed_questions_count');

        // if (viewedCount && parseInt(viewedCount) >= 10) {
        //     setLimitReached(true);
        //     setLoading(false);
        //     return;
        // }

        const urlFilters = searchForParams();

        try {
            const data = await getQuestion(urlFilters);

            console.log(data);
            if (data.questionLimitReached) {
                setLimitReached(true);
                return;
            }

            setQuestion(data);
        } catch (error) {
            console.error('Error loading question:', error);

            // if (error.response && error.response.status === 403) {
            //     setLimitReached(true);
            // }
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
    if (loading) return <div>Loading...</div>;
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
            {question.numberOfCorrectChoices > 1  && <p>Multiple choices possible.</p>}
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
