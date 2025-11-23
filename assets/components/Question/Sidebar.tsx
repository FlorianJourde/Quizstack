import React from 'react';
import {ROUTES} from "../../utils/routes";
import {useAuth} from "../../context/AuthContext";
import {QuestionInterface} from "../../types";

function Sidebar(
    {
        onNext,
        onWrap,
        isLoading,
        question
    }: {
        onNext: () => void;
        onWrap: () => void;
        isLoading: boolean;
        question: QuestionInterface
    }) {
    const {isAdmin} = useAuth();

    return (
        <div className={`xl:sticky top-spacing-primary z-10 -order-1`}>
            <aside
                className={`absolute glass box bg-dark-grey-secondary bottom-0 xl:bottom-auto xl:mt-0 xl:-left-spacing-primary xl:-translate-x-full -translate-y-[12px] sm:-translate-y-[30px] xl:translate-y-0 p-2 z-10`}>
                <div className="buttons-container xl:flex-col gap-2">
                    <button className="button button-action" onClick={onNext} disabled={isLoading}>
                        <span className="material-icons">autorenew</span>
                    </button>

                    <a href={ROUTES.FILTERS} className="button button-action">
                        <span className="material-icons">tune</span>
                    </a>

                    <button className="button button-action" onClick={onWrap}>
                        <span className="material-icons">keyboard_return</span>
                    </button>

                    {question.correctChoices && (
                        <button className="button button-action relative copy-link" data-url={`${window.location.origin}/question/${question.id}`}>
                            <span className="material-icons">share</span>
                            <ul className="tags-container hidden absolute whitespace-nowrap top-0 left-1/2 -translate-x-1/2 -translate-y-full lg:top-1/2 lg:left-auto lg:right-0 lg:translate-x-full lg:-translate-y-1/2">
                                <span className="tag tag-small hidden">Copied !</span>
                            </ul>
                        </button>
                    )}

                    {isAdmin() && (
                        <a href={`${ROUTES.QUESTION}/${question.id}/edit`}
                           className="button button-action bg-very-dark-grey-primary">
                            <span className="material-icons">edit</span>
                        </a>
                    )}
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;