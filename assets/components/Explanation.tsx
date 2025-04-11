import React from 'react';

Explanation.propTypes = {};

function Explanation({question}) {
    return (
        <div>
            <h2>
                {question.explanation}
            </h2>
            <br/>
        </div>
    );
}

export default Explanation;
