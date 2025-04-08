import React, {useEffect} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";

function Choice({result, choice, index, answers, setAnswers}) {
    const handleAnswersChange = (answerId) => {
        if (result !== null) return false;

        setAnswers(prevSelected => {
            if (prevSelected.includes(answerId)) {
                return prevSelected.filter(id => id !== answerId);
            } else {
                return [...prevSelected, answerId];
            }
        });
    };

    function checkAnswersValidity(answerId) {
        if (result === null) return false;

        const isCorrect = result.correctChoices.includes(answerId);
        const wasSelected = answers.includes(answerId);

        return isCorrect === wasSelected;
    }

    return (
        <li className="choice-option">
            <input
                type="checkbox"
                id={`choice-${index}`}
                name="choice"
                value={choice.id}
                checked={answers.includes(choice.id)}
                onChange={() => handleAnswersChange(choice.id)}
            />
                <MarkdownRenderer content={choice.content} />

                {result !== null && (
                    <>
                        {checkAnswersValidity(choice.id) ? (
                            <span className="correct-icon"> ✓</span>
                        ) : (
                            <span className="correct-icon"> ✗</span>
                        )}
                    </>
                )}
            {/*</label>*/}
        </li>
    );
}

export default Choice;