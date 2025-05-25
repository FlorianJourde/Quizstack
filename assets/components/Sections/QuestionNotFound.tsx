import React from 'react';
import {ROUTES} from "../../utils/routes";

function QuestionNotFound() {
    return (
        <>
            <div className="page-header-container">
                <h1 className="big-title grow">Question not found</h1>
            </div>
            <div className="glass box flex flex-col gap-spacing-primary">

                <div>
                    <h2 className={'small-title'}>
                        <span className="material-icons">warning</span>
                        No question found
                    </h2>
                    <p>Try again later or with different
                        filters.</p>
                </div>

                <div className="buttons-container">
                    <a href={ROUTES.FILTERS} className="button button-primary">
                        Filters
                    </a>
                </div>
            </div>
        </>
    );
};

export default QuestionNotFound;