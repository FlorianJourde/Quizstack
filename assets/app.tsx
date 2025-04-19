import React from 'react';
import {createRoot} from "react-dom/client";
import Question from "./components/Question";
import {AuthProvider} from "./context/AuthContext";
import './styles/app.css';
import './scripts/filters'
import './scripts/question-form'
import './scripts/menu'
import {motion, AnimatePresence} from "motion/react";
// import {animations} from "./motion/animations";

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('quiz-container');
    if (questionContainer) {
        const mode = questionContainer.dataset.mode || 'quiz';
        const questionId = parseInt(questionContainer.dataset.questionId || '0');
        const showComments = questionContainer.dataset.showComments !== 'false';

        const root = createRoot(questionContainer);
        root.render(
            <AuthProvider>
                {/*<AnimatePresence mode="wait">*/}
                {/*    <motion.div*/}
                {/*        key="main-content"*/}
                {/*        initial="hidden" animate="visible" exit="hidden"*/}
                {/*        variants={animations}*/}
                {/*    >*/}
                        <Question mode={mode} questionId={questionId} showComments={showComments}/>
                {/*    </motion.div>*/}
                {/*</AnimatePresence>*/}
            </AuthProvider>
        );
    }
});
