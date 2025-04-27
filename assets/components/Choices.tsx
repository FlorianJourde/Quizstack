import React, {Dispatch, SetStateAction} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import useRaysAnimation from "../hook/RaysAnimation";
import {container, item} from "../motion/animations";
import {motion} from "motion/react";
import {QuestionInterface} from "../types";

function Choices({mode, question, answers, setAnswers}: {
    mode: string;
    question: QuestionInterface;
    answers: number[];
    setAnswers?: Dispatch<SetStateAction<number[]>>;
}) {

    useRaysAnimation(question, mode);

    function handleAnswersChange(answerId) {
        if (question.correctChoices) return;
        if (!setAnswers) return;

        setAnswers(prevSelected => {
            if (question.numberOfCorrectChoices === 1) {
                return [answerId];
            } else {
                if (prevSelected.includes(answerId)) {
                    return prevSelected.filter(id => id !== answerId);
                } else {
                    return [...prevSelected, answerId];
                }
            }
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
            className="choices-container flex flex-col gap-spacing-primary">
            {question.choices.map((choice, index) => (
                <motion.li
                    variants={item}
                    key={`choice-${choice.id}`} className={`choice-option glass`}>
                    <fieldset className={`checkbox-group`}>
                        <label>
                            <input
                                type="checkbox"
                                id={`choice-${index}`}
                                name="choice"
                                value={choice.id}
                                checked={answers.includes(choice.id)}
                                onChange={() => handleAnswersChange(choice.id)}
                                className={`checkbox-input ${getAnswerStatus(choice.id)}`}
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