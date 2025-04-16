import React from 'react';
import {ROUTES} from "../utils/routes";

function Sidebar({loadQuestion, isLoading}) {

    return (
        <div className={`xl:sticky top-spacing-primary z-10`}>
            <aside
                className={`absolute glass box bg-dark-grey-secondary bottom-0 xl:bottom-auto xl:mt-0 xl:-left-spacing-primary xl:-translate-x-full translate-y-1/2 xl:translate-y-0 p-2 z-10`}>
                <div className="buttons-container xl:flex-col gap-2">
                    <button className="button button-action" onClick={loadQuestion} disabled={isLoading}>
                        <span className="material-icons">autorenew</span>
                    </button>

                    <a href={ROUTES.FILTERS} className="button button-action">
                        <span className="material-icons">tune</span>
                    </a>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;