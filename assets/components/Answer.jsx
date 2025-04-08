import React from 'react';

function Answer({result, answer, index, selectedAnswer, setSelectedAnswer}) {
    const handleAnswerChange = (answerId) => {
        if (result !== null) return false;

        setSelectedAnswer(prevSelected => {
            if (prevSelected.includes(answerId)) {
                return prevSelected.filter(id => id !== answerId);
            } else {
                return [...prevSelected, answerId];
            }
        });
    };

    function checkAnswerValidity(answerId) {
        if (result === null) return false;

        const isCorrect = result.correctAnswer.includes(answerId);
        const wasSelected = selectedAnswer.includes(answerId);

        return isCorrect === wasSelected;
    }


    return (
        <li className="answer-option">
            <input
                type="checkbox"
                id={`answer-${index}`}
                name="answer"
                value={answer.id}
                checked={selectedAnswer.includes(answer.id)}
                onChange={() => handleAnswerChange(answer.id)}
            />
            <label htmlFor={`answer-${index}`}>
                {answer.content}

                {result !== null && (
                    <>
                        {checkAnswerValidity(answer.id) ? (
                            <span className="correct-icon"> ✓</span>
                        ) : (
                            <span className="correct-icon"> ✗</span>
                        )}
                    </>
                )}

            </label>
        </li>
    );
};

export default Answer;