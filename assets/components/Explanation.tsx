import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";

function Explanation({question}) {
    return (
        <div className={`question-bottom-container mt-4`}>
            <h3 className={`small-title`}>Explanation</h3>
            <p>
                <MarkdownRenderer content={question.explanation}/>
            </p>
        </div>
    );
}

export default Explanation;
