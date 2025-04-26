import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import Image from "./Image";
import Explanation from "./Explanation";

function QuestionContent({question}) {
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

            {question.image && <Image image={question.image}/>}

            {question.explanation && <Explanation question={question}/>}
        </div>
    );
};

export default QuestionContent;