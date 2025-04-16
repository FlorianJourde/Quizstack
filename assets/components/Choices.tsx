import React, {useEffect, useState} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";

function Choices({mode, question, answers, setAnswers}) {
    function handleAnswersChange(answerId) {
        if (question.correctChoices) return false;

        setAnswers(prevSelected => {
            if (prevSelected.includes(answerId)) {
                return prevSelected.filter(id => id !== answerId);
            } else {
                return [...prevSelected, answerId];
            }
        });
    }

    function checkAnswerValidity(answerId) {
        if (!question.correctChoices) return false;

        if (answers.length === 0) {
            return question.correctChoices.includes(answerId);
        }

        const isCorrect = question.correctChoices.includes(answerId);
        const wasSelected = answers.includes(answerId);

        return isCorrect === wasSelected;
    }

    useEffect(function () {
        const originalElement = document.querySelector('.rays');

        if (mode === 'display') return;

        if (question.correctChoices) {
            const clonedElement = originalElement?.cloneNode(true) as HTMLElement;
            const colorClass = question.isMatch === true ? 'green' : 'red';

            clonedElement.classList.add(colorClass);
            clonedElement.classList.add('hide');

            originalElement?.parentNode?.insertBefore(clonedElement, originalElement.nextSibling);
            originalElement?.classList.add('hide');

            requestAnimationFrame(() => {
                clonedElement?.classList.remove('hide');
            });

            setTimeout(function () {
                originalElement?.remove();
            }, 1000);
        } else {
            const clonedElement = originalElement?.cloneNode(true) as HTMLElement;
            clonedElement.classList.add('hide');

            originalElement?.parentNode?.insertBefore(clonedElement, originalElement.nextSibling);
            originalElement?.classList.add('hide');

            requestAnimationFrame(() => {
                clonedElement?.classList.remove('hide');
                clonedElement?.classList.remove('green');
                clonedElement?.classList.remove('red');
            });

            setTimeout(function () {
                originalElement?.remove();
            }, 1000);
        }

    }, [question]);

    return (
        <div className="choice-container flex flex-col gap-8">
            {question.choices.map((choice, index) => (
                <li key={`choice-${choice.id}`} className={`choice-option glass`}>
                    <fieldset className={`checkbox-group`}>
                        <label>
                            <input
                                type="checkbox"
                                id={`choice-${index}`}
                                name="choice"
                                value={choice.id}
                                checked={answers.includes(choice.id)}
                                onChange={() => handleAnswersChange(choice.id)}
                                className={`checkbox-input ${question.correctChoices && (
                                    checkAnswerValidity(choice.id) ? "correct" : "incorrect")
                                }`}
                            />
                            <span className="checkbox-tile box">
                                    <span className="checkbox-label">
                                        <MarkdownRenderer content={choice.content}/>
                                    </span>
                                </span>
                        </label>
                    </fieldset>
                </li>
            ))}
        </div>
    );
}

export default Choices;