import React, {useEffect, useState} from 'react';
import {getQuestion, submitAnswer} from "../services/questionsApi";
import {getComments} from "../services/commentsApi";
import Answer from "./Answer";
import Explanation from "./Explanation";
import Comments from "./Comments";

function Question() {
    const [loading, setLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [result, setResult] = useState(null);
    const [comments, setComments] = useState([]);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
    }, [question]);

    useEffect(() => {
        if (result !== null) {
        }

    }, [result]);

    useEffect(() => {
        if (comments !== null) {
            console.log('comments', comments);
        }

    }, [comments]);

    useEffect(() => {
    }, [selectedAnswer]);

    useEffect(() => {
        loadQuestion();
    }, []);

    async function loadQuestion() {
        setLoading(true);
        setSelectedAnswer([]);
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
        const urlFilters = {};

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
            const result = await submitAnswer(question.id, selectedAnswer);
            const comments = await getComments(question.id);
            setResult(result);
            setComments(comments);
        } catch (error) {
            console.error('Error submitting answer : ', error);
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
            <p>Content : {question.content}</p>
            <p>Difficulty : {question.difficulty}</p>

            <br/>

            <ul>
                {question.answers.map((answer, index) => (
                    <Answer key={`answer-${answer.id}`} result={result} answer={answer} index={index}
                            selectedAnswer={selectedAnswer}
                            setSelectedAnswer={setSelectedAnswer}/>
                ))}
            </ul>

            <br/>
            <button onClick={handleSubmit}>
                Validate
            </button>

            {/*</form>*/}

            <br/>
            <br/>


            {result !== null && (
                <>
                    <Explanation explanation={result.explanation}/>

                    <button onClick={handleNextQuestion}>
                        Next question
                    </button>

                    <Comments comments={comments}/>
                </>
            )}

        </>
    )
}

export default Question;
