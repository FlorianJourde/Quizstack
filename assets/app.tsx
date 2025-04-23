import React from 'react';
import {createRoot} from "react-dom/client";
import {AuthProvider} from "./context/AuthContext";
import Question from "./components/Question";
import Demo from "./components/Demo";
import Activity from "./components/Activity";
import './styles/app.css';
import './scripts/filters'
import './scripts/switches'
import './scripts/question-form'
import './scripts/menu'
import './scripts/accordion'
import {motion, AnimatePresence} from "motion/react";
// import {animations} from "./motion/animations";

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.querySelector('#quiz-container') as HTMLElement;
    if (questionContainer) {
        const mode = questionContainer.dataset.mode || 'quiz';
        const questionId = parseInt(questionContainer.dataset.questionId || '0');
        const showComments = questionContainer.dataset.showComments !== 'false';

        const root = createRoot(questionContainer);
        root.render(
            <AuthProvider>
                <Question mode={mode} questionId={questionId} showComments={showComments}/>
            </AuthProvider>
        );
    }

    const demoContainer = document.querySelector('#demo-container') as HTMLElement;
    if (demoContainer) {
        const root = createRoot(demoContainer);
        root.render(
            <Demo mode={'display'}/>
        );
    }

    const activityContainer = document.querySelector('#activity-container') as HTMLElement;
    const mode = activityContainer.dataset.mode || 'display';

    if (activityContainer) {
        const root = createRoot(activityContainer);
        root.render(
            <Activity mode={mode}/>
        );
    }
});
