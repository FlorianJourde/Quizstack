import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";


function Explanation({question}) {
    return (
        <div>
            <h2>
                <MarkdownRenderer content={question.explanation}/>
            </h2>
            <br/>
        </div>
    );
}

export default Explanation;
