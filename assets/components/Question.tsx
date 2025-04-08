import React, {useEffect, useState} from 'react';
import {getQuestion, submitAnswers} from "../services/questionsApi";
import {getComments} from "../services/commentsApi";
import Choice from "./Choice";
import Explanation from "./Explanation";
import Comments from "./Comments";
// import {Question} from "../types";
import {QuestionInterface, ResultInterface} from '../types';
// import {QuestionInterface} from '../types';
import {UrlFiltersInterface} from "../types/urlFilters";
import {CommentInterface} from "../types/comment";

// interface QuestionProps {
//     question: Question;
// }

// function Question: React.FC<QuestionProps> = ({ question }) => {
// function Question({question: questionProp}): JSX.Element {
// function Question({QuestionProps}): JSX.Element {
//     function Question(props: QuestionInterface): JSX.Element {

// function Question({ content, difficulty, categories }: QuestionInterface): React.ReactNode {
function Question() {
// const Question: React.FC<QuestionProps> = ({question: questionProp}) => {

// const QuestionComponent: React.FC<QuestionProps> = ({ question }) => {

    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState<ResultInterface | null>(null);
    // const [comments, setComments] = useState<CommentInterface | []>([]);
    const [question, setQuestion] = useState<QuestionInterface | null>(null);

    useEffect(() => {
        console.log(question)
    }, [question]);

    useEffect(() => {
        if (result !== null) {
        }
    }, [result]);

    useEffect(() => {
        if (question?.comments !== null) {
            // console.log('comments', comments);
        }

    }, [question?.comments]);

    useEffect(() => {
    }, [answers]);

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

            // if (data?.id) {
            //     const comments = await getComments(data.id);
            //     setComments(comments);
            // }

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
            <p>Content : {question.content}</p>
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

            {/*</form>*/}

            <br/>
            <br/>


            {result !== null && (
                <>
                    {result && <Explanation explanation={question.explanation}/>}
                        {/*<Explanation explanation={result.explanation}/>*/}

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
