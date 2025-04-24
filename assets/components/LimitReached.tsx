import React from 'react';
import {ROUTES} from "../utils/routes";

function LimitReached() {
    return (
        <>
            <div className="page-header-container">
                <h1 className="big-title grow">Limit reached !</h1>
            </div>
            <div className="glass box flex flex-col gap-spacing-primary">
                <div>
                    <h2 className={`small-title`}>
                        <span className="material-icons">warning</span>
                        You've reached the question limit for today
                    </h2>
                    <p>Please login or register to continue to play.</p>
                </div>
                <div className="buttons-container">
                    <a href={ROUTES.LOGIN} className="button button-tertiary">
                        Login
                    </a>
                    <a href={ROUTES.REGISTER} className="button button-primary">
                        Register
                    </a>
                </div>
            </div>
        </>
    );
}

export default LimitReached;