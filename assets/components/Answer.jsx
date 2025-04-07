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

        // console.log('selectedAnswer : ', selectedAnswer);
        // console.log('correctAnswer : ', result.correctAnswer);
        // console.log('isCorrect : ', isCorrect);
        // console.log('wasSelected : ', wasSelected);
        // console.lo

        // const isCorrect = result.correctAnswer.includes(answer.id);
        // const wasSelected = selectedAnswer.includes(answer.id);

        // return isCorrect && wasSelected;
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
                // onChange={() => handleAnswerChange(answer.id)}
                onChange={() => handleAnswerChange(answer.id)}
            />
            <label htmlFor={`answer-${index}`}>
                {answer.content}

                {result !== null && (
                    <>
                        {/*{isCorrect && <span className="correct-icon"> ✓</span>}*/}
                        {/*{wasSelected && !isCorrect && <span className="incorrect-icon"> ✗</span>}*/}
                        {checkAnswerValidity(answer.id) ? (
                            <span className="correct-icon"> ✓</span>
                        ) : (
                            <span className="correct-icon"> ✗</span>
                        )}
                        {/*{!checkAnswerValidity(answer.id) && <span className="incorrect-icon"> ✗</span>}*/}
                    </>
                )}

            </label>
        </li>
    );
};

export default Answer;