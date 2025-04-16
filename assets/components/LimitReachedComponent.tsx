import React from 'react';
import {ROUTES} from "../utils/routes";

function LimitReachedComponent() {
    return (
        <div className="wrapper">
            <div className="page-header-container">
                <h1 className="big-title grow">Limit reached !</h1>
            </div>
            <div className="glass box flex flex-col gap-spacing-primary">

                {/*dark-glass flex flex-col box p-spacing-primary rounded-radius-primary gap-spacing-primary
                mt-spacing-primary items-center text-center*/}

                <p>You've reached the question limit without authentication for today !</p>
                <p>Please login or register.</p>

                <div className="buttons-container xl:flex-col gap-spacing-primary justify-center">
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

export default LimitReachedComponent;