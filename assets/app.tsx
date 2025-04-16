import React from 'react';
import {createRoot} from "react-dom/client";
import Question from "./components/Question";
import './styles/app.css';
import {AuthProvider} from "./context/AuthContext";
import './scripts/filters'
import './scripts/question-form'
import './scripts/header'
import './scripts/menu'

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('quiz-container');
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
});
