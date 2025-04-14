import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";


function Explanation({question}) {
    return (
        <h3 className={'mt-4'}>
            <MarkdownRenderer content={question.explanation}/>
        </h3>
    );
}

export default Explanation;
