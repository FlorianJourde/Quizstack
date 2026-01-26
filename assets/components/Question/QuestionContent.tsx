import React, {useEffect} from 'react';
import {MarkdownRenderer} from "../Markdown/MarkdownRenderer";
import QuestionImage from "./QuestionImage";
import Explanation from "./Explanation";
import {QuestionInterface} from "../../types";

function QuestionContent(
    {
        question,
        mode,
        onNext,
    }: {
        question: QuestionInterface;
        mode: string;
        onNext?: () => void;
    }) {

    useEffect(() => {
        const event = new CustomEvent('reactComponentUpdated');
        window.dispatchEvent(event);
    }, [question]);

    return (
        <div className="glass box">
            <div className="question-header-container flex gap-8 justify-between items-center mb-4">
                <ul className={`tags-container grow-1`}>
                    {question.categories.map((category, index) => (
                        <li key={`category-${index}`}>
                            <span className={`tag tag-small`}>{category.name}</span>
                        </li>
                    ))}
                </ul>
                <div className={`flex items-end gap-1`}>
                    {Array(3).fill(null).map((_, index) => {
                        const heightClass = index === 0 ? 'h-3' : index === 1 ? 'h-4' : 'h-5';
                        const opacityClass = index < question?.difficulty ? 'opacity-100' : 'opacity-50';

                        return (
                            <span
                                className={`rounded-sm w-1.5 bg-white/75 ${heightClass} ${opacityClass}`}
                                key={index}
                            ></span>
                        );
                    })}
                </div>
            </div>

            <div className={`question-content-container mt-4 flex flex-col gap-spacing-secondary`}>
                <MarkdownRenderer content={question.content}/>
            </div>

            {question.numberOfCorrectChoices > 1 &&
                <p className={'opacity-50 text-sm mt-4'}>Multiple choices possible.</p>
            }

            {question.image && <QuestionImage image={question.image}/>}

            {question.correctChoices && question.explanation && (mode !== 'share') &&
                <Explanation question={question} mode={mode}/>}

            {mode === 'game' && (
                <div className={'buttons-container absolute right-0 bottom-spacing-primary translate-x-1/2 -mr-0.5'}>
                    {question.correctChoices &&
                        <button className={`button button-action bg-dark-grey-primary opacity-100 fade-in-up`} onClick={onNext}>
                            <span className="material-icons text-[14px] sm:text-[24px]">arrow_forward</span>
                        </button>
                    }
                </div>
            )}

        </div>
    );
}

export default QuestionContent;