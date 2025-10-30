import React from 'react';
import {createRoot} from "react-dom/client";
import {AuthProvider} from "./context/AuthContext";
import Question from "./components/Question/Question";
import Demo from "./components/Demo/Demo";
import Discussions from "./components/Sections/Discussions";
import StacksSlider from "./components/Sections/StacksSlider";
import Share from "./components/Share/Share";
import './styles/app.scss';
import './scripts/filters'
import './scripts/switches'
import './scripts/question-form'
import './scripts/question-autocomplete'
import './scripts/menu'
import './scripts/accordion'
import './scripts/textarea'
import './scripts/appear-on-scroll'

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

    const shareContainers = document.querySelectorAll('.share-container') as NodeListOf<HTMLElement>;
    shareContainers.forEach((shareContainer) => {
        const questionId = parseInt(shareContainer.dataset.questionId || '0');
        const mode = shareContainer.dataset.mode || 'display';
        const social = shareContainer.dataset.social;

        const root = createRoot(shareContainer);
        root.render(
            <Share questionId={questionId} mode={mode} social={social}/>
        );
    });

    const discussionsContainer = document.querySelector('#discussions-container') as HTMLElement;
    if (discussionsContainer) {
        const mode = discussionsContainer.dataset.mode || 'display';
        const root = createRoot(discussionsContainer);
        root.render(
            <Discussions mode={mode}/>
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
