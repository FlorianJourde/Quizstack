import React from 'react';
import {createRoot} from "react-dom/client";
import Question from "./components/Question";
import './styles/app.css';
import {AuthProvider} from "./context/AuthContext";

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('quiz-container');


    if (!questionContainer) return;

    const mode = questionContainer.dataset.mode || 'quiz';
    const questionId = parseInt(questionContainer.dataset.questionId || '0');

    // if (questionContainer) {
    const root = createRoot(questionContainer);
    root.render(
        <AuthProvider>
            <Question mode={mode} questionId={questionId}/>
        </AuthProvider>
    );
    // }
});
