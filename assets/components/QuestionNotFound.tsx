import React from 'react';
import {ROUTES} from "../utils/routes";

function QuestionNotFound() {
    return (
        <>
            {/*<div className="wrapper">*/}
            <div className="page-header-container">
                <h1 className="big-title grow">Question not found</h1>
            </div>
            <div className="glass box flex flex-col gap-spacing-primary">
                No question found, try later or with different filters...
                <div className="buttons-container gap-spacing-primary">
                    <a href={ROUTES.FILTERS} className="button button-primary">
                        Filters
                    </a>
                </div>
            </div>
            {/*</div>*/}
        </>
    );
};

export default QuestionNotFound;