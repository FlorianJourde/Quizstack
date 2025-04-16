import React from 'react';

function QuestionNotFound() {
    return (
        <div className="wrapper">
            <div className="page-header-container">
                <h1 className="big-title grow">Question not found</h1>
            </div>
            <div className="glass box">
                No question found, try later or with different filters...
            </div>
        </div>
    );
};

export default QuestionNotFound;