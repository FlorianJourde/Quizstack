import React, {useEffect, useState} from 'react';
import {getQuestion} from "../services/questionsApi";

function Question() {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({});

    const loadQuestion = async () => {
        setLoading(true);

        const searchParams = new URLSearchParams(window.location.search);
        const urlFilters = {};

        if (searchParams.has('difficulty')) {
            urlFilters.difficulty = searchParams.get('difficulty');
        }

        if (searchParams.has('category[]')) {
            const categories = searchParams.getAll('category[]');
            urlFilters.categories = categories;
        }

        setFilters(urlFilters);

        try {
            // console.log(filters);
            const data = await getQuestion(urlFilters);
            setQuestion(data);
        } catch (error) {
            console.error('Error loading question:', error);
        } finally {
            setLoading(false);
        }
    }

    // function searchForParams() {
    //     const searchParams = new URLSearchParams(window.location.search);
    //     const urlFilters = {};
    //
    //     if (searchParams.has('difficulty')) {
    //         urlFilters.difficulty = searchParams.get('difficulty');
    //     }
    //
    //     if (searchParams.has('category[]')) {
    //         const categories = searchParams.getAll('category[]');
    //         urlFilters.categories = categories;
    //
    //     }
    //
    //     setFilters(urlFilters);
    // }

    useEffect(() => {
        // console.log(filters);
    }, [filters]);

    useEffect(() => {
        loadQuestion();
    }, []);

    const handleNextQuestion = () => {
        loadQuestion();
        if (onNewQuestion) onNewQuestion();
    };

    // useEffect(() => {
    //     // console.log(question);
    //     console.log(question);
    //     // console.log("Question mise à jour:", question.answers);
    //     // console.log("Question mise à jour:", question.answer);
    // }, [question]);

    const handleSubmit = async () => {
        if (!selectedAnswer) return;

        try {
            const result = await submitAnswer(questionId, selectedAnswer);
            setResult(result);
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    };

    if (loading) return <div>Chargement...</div>;
    if (!question) return <div>Question non trouvée</div>;

    return (
        <>
            <button onClick={handleNextQuestion}>
                Question suivante
            </button>

            <br/>

            <h2>Question component</h2>
            <p>ID : {question.id}</p>
            <p>Content : {question.content}</p>
            <p>Difficulty : {question.difficulty}</p>

            <ul>
                {question.answers.map((answer) => (
                    <li key={`answer-${answer.id}`}>{answer.content}</li>
                ))}
            </ul>
        </>
    )

    /*return (
        <>
            <h2 className={'text-3xl'}>Question Component</h2>
            <div className="question">
                <h2>{question.title}</h2>
                <p>{question.content}</p>
                <div className="answers">
                    {question.answers.map((answer, index) => (
                        <div key={index} className="answer-option">
                            <input
                                type="radio"
                                id={`answer-${index}`}
                                name="answer"
                                value={answer}
                                checked={selectedAnswer === answer}
                                onChange={() => setSelectedAnswer(answer)}
                                disabled={result !== null}
                            />
                            <label htmlFor={`answer-${index}`}>{answer}</label>
                        </div>
                    ))}
                </div>

                {!result && (
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedAnswer}
                    >
                        Valider
                    </button>
                )}

                {result && (
                    <div className={`result ${result.correct ? 'correct' : 'incorrect'}`}>
                        <p>{result.correct ? 'Bonne réponse!' : 'Réponse incorrecte'}</p>
                        {result.explanation && <p>{result.explanation}</p>}
                    </div>
                )}
            </div>
            );
        </>
    );*/
}

export default Question;

//     const [question, setQuestion] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedAnswer, setSelectedAnswer] = useState('');
//     const [result, setResult] = useState(null);
//     const [showExplanation, setShowExplanation] = useState(false);
//
//     useEffect(() => {
//         const fetchQuestion = async () => {
//             try {
//                 const questionId = document.getElementById('question-app').dataset.questionId;
//                 const response = await axios.get(`/api/questions/${questionId}`);
//                 setQuestion(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Erreur lors du chargement de la question');
//                 setLoading(false);
//             }
//         };
//
//         fetchQuestion();
//     }, []);
//
//     const handleAnswerSelection = (answer) => {
//         setSelectedAnswer(answer);
//     };
//
//     const handleSubmit = async () => {
//         if (!selectedAnswer) {
//             return;
//         }
//
//         try {
//             const questionId = document.getElementById('question-app').dataset.questionId;
//             const response = await axios.post(`/api/questions/${questionId}/check`, {
//                 answer: selectedAnswer
//             });
//
//             setResult(response.data);
//             setShowExplanation(true);
//         } catch (err) {
//             setError('Erreur lors de la vérification de la réponse');
//         }
//     };
//
//     if (loading) {
//         return <div className="loading">Chargement de la question...</div>;
//     }
//
//     if (error) {
//         return <div className="error">{error}</div>;
//     }
//
//     return (
//         <div className="question-container">
//             <h1 className="question-title">{question.title}</h1>
//
//             <div className="question-meta">
//                 <span className="difficulty">
//                     Niveau: {
//                     question.difficulty === 1 ? 'Débutant' :
//                         question.difficulty === 2 ? 'Intermédiaire' :
//                             question.difficulty === 3 ? 'Avancé' :
//                                 question.difficulty === 4 ? 'Expert' : question.difficulty
//                 }
//                 </span>
//                 <span className="categories">
//                     Catégories: {question.categories.join(', ')}
//                 </span>
//             </div>
//
//             <div className="question-content">
//                 {question.content}
//             </div>
//
//             <div className="answer-options">
//                 {question.answers.map((answer, index) => (
//                     <div className="answer-option" key={index}>
//                         <input
//                             type="radio"
//                             id={`answer-${index}`}
//                             name="answer"
//                             value={answer}
//                             checked={selectedAnswer === answer}
//                             onChange={() => handleAnswerSelection(answer)}
//                             disabled={showExplanation}
//                         />
//                         <label htmlFor={`answer-${index}`}>{answer}</label>
//                     </div>
//                 ))}
//             </div>
//
//             {!showExplanation && (
//                 <button
//                     className="submit-answer"
//                     onClick={handleSubmit}
//                     disabled={!selectedAnswer}
//                 >
//                     Valider ma réponse
//                 </button>
//             )}
//
//             {showExplanation && result && (
//                 <div className={`result ${result.correct ? 'correct' : 'incorrect'}`}>
//                     <h3>{result.correct ? 'Bonne réponse!' : 'Réponse incorrecte'}</h3>
//
//                     {!result.correct && (
//                         <p className="correct-answer">
//                             La bonne réponse était: <strong>{result.correctAnswer}</strong>
//                         </p>
//                     )}
//
//                     <div className="explanation">
//                         <h4>Explication:</h4>
//                         <p>{result.explanation}</p>
//                     </div>
//
//                     <button className="next-question">
//                         Question suivante →
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default QuestionComponent;