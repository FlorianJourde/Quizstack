import React from 'react';
import {ROUTES} from "../utils/routes";

function LimitReached() {
    return (
        <div className="wrapper">
            <div className="page-header-container">
                <h1 className="big-title grow">Limit reached !</h1>
            </div>
            <div className="glass box flex flex-col gap-spacing-primary">
                <p>You've reached the question limit without authentication for today !</p>
                <p>Please login or register.</p>
                <div className="buttons-container gap-spacing-primary justify-center">
                    <a href={ROUTES.LOGIN} className="button button-secondary">
                        Login
                    </a>
                    <a href={ROUTES.REGISTER} className="button button-primary">
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LimitReached;