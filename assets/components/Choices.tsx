import React, {useEffect} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";

function Choices({question, answers, setAnswers}) {
    useEffect(() => {
        console.log(answers)
    }, [answers]);

    function handleAnswersChange(answerId) {
        if (question.correctChoices) return false;

        setAnswers(prevSelected => {
            if (prevSelected.includes(answerId)) {
                return prevSelected.filter(id => id !== answerId);
            } else {
                return [...prevSelected, answerId];
            }
        });
    };

    function checkAnswersValidity(answerId) {
        if (!question.correctChoices) return false;

        const isCorrect = question.correctChoices.includes(answerId);
        const wasSelected = answers.includes(answerId);

        return isCorrect === wasSelected;
    }

    return (
        <>
            {question.choices.map((choice, index) => (
                <li key={`choice-${choice.id}`} className="choice-option">
                    <input
                        type="checkbox"
                        id={`choice-${index}`}
                        name="choice"
                        value={choice.id}
                        checked={answers.includes(choice.id)}
                        onChange={() => handleAnswersChange(choice.id)}
                    />

                    <MarkdownRenderer content={choice.content}/>

                    {question.correctChoices && (
                        <>
                            {checkAnswersValidity(choice.id) ? (
                                <span className="correct-icon"> ✓</span>
                            ) : (
                                <span className="correct-icon"> ✗</span>
                            )}
                        </>
                    )}

                </li>
            ))}
        </>

    );
}

export default Choices;