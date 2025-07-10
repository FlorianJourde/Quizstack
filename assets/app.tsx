import React from 'react';
import {createRoot} from "react-dom/client";
import {AuthProvider} from "./context/AuthContext";
import Question from "./components/Question/Question";
import Demo from "./components/Demo/Demo";
import Activity from "./components/Sections/Activity";
import './styles/app.css';
import './scripts/filters'
import './scripts/lenis'
import './scripts/switches'
import './scripts/question-form'
import './scripts/question-autocomplete'
import './scripts/menu'
import './scripts/accordion'
import './scripts/appear-on-scroll'
import StacksSlider from "./components/Sections/StacksSlider";
import Share from "./components/Share/Share";

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

    const shareContainer = document.querySelector('#share-container') as HTMLElement;
    if (shareContainer) {
        const questionId = parseInt(shareContainer.dataset.questionId || '0');
        const mode = shareContainer.dataset.mode || 'display';

        const root = createRoot(shareContainer);
        root.render(
            <Share questionId={questionId} mode={mode}/>
        );
    }

    const activityContainer = document.querySelector('#activity-container') as HTMLElement;
    if (activityContainer) {
        const mode = activityContainer.dataset.mode || 'display';
        const root = createRoot(activityContainer);
        root.render(
            <Activity mode={mode}/>
        );
    }

    const stacksSliderContainer = document.querySelector('#stacks-slider-container') as HTMLElement;
    if (stacksSliderContainer) {
        const root = createRoot(stacksSliderContainer);
        root.render(
            <StacksSlider/>
        );
    }
});
