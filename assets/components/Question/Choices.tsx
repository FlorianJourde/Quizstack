import React, {useEffect, useState} from 'react';
import {MarkdownRenderer} from "../Markdown/MarkdownRenderer";
import useRaysAnimation from "../../hook/RaysAnimation";
import {container, item} from "../../motion/animations";
import {motion} from "motion/react";
import {QuestionInterface} from "../../types";
import shuffle from "../../scripts/shuffle";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

function Choices({mode, question, answers, setAnswers}: {
    mode: string;
    question: QuestionInterface;
    answers: number[];
    setAnswers?: SetState<number[]>;
}) {

    const [shuffledChoices, setShuffledChoices] = useState(() => shuffle(question.choices));

    useRaysAnimation(question, mode);

    function handleAnswersChange(answerId: number): void {
        if (question.correctChoices || !setAnswers) {
            return;
        }

        setAnswers(prevSelected => {
            if (question.numberOfCorrectChoices === 1) {
                return [answerId];
            }

            const isCurrentlySelected = prevSelected.includes(answerId);

            return isCurrentlySelected
                ? prevSelected.filter(id => id !== answerId)
                : [...prevSelected, answerId];
        });
    }

    function getAnswerStatus(answerId) {
        if (!question.correctChoices) return '';

        const isSelected = answers.includes(answerId);
        const isCorrect = question.correctChoices.includes(answerId);

        if (isCorrect) return 'correct';
        if (isSelected) return 'incorrect';

        return '';
    }

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className={`choices-container flex flex-col gap-spacing-primary ${question.numberOfCorrectChoices > 1 && 'multiple-choices'}`}>
            {shuffledChoices.map((choice, index) => (
                <motion.li
                    variants={item}
                    key={`choice-${choice.id}`} className={`choice-option glass`}>
                    <fieldset className={`checkbox-group`}>
                        <label>
                            <input
                                type={`${question.numberOfCorrectChoices > 1 ? 'checkbox' : 'radio'}`}
                                id={`choice-${index}`}
                                name="choice"
                                value={choice.id}
                                checked={answers.includes(choice.id)}
                                onChange={() => handleAnswersChange(choice.id)}
                                // className={`checkbox-input ${getAnswerStatus(choice.id)} ${answers.includes(choice.id) ? 'checked' : ''}`}
                                className={`checkbox-input ${getAnswerStatus(choice.id)} ${answers.includes(choice.id) ? 'checked' : ''}`}
                            />
                            <span className="checkbox-tile box">
                                <span className="checkbox-label">
                                    <MarkdownRenderer content={choice.content}/>
                                </span>
                            </span>
                        </label>
                    </fieldset>
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default Choices;