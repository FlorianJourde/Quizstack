import React from 'react';
import {createRoot} from "react-dom/client";
import Question from "./components/Question";
import './styles/app.css';
import {AuthProvider} from "./context/AuthContext";

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('quiz-container');
    if (questionContainer) {
        const root = createRoot(questionContainer);
        root.render(
            <AuthProvider>
                <Question/>
            </AuthProvider>
        );
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const questionContainer = document.getElementById('quiz-container');
//     if (questionContainer) {
//         const productRoot = createRoot(questionContainer);
//         // productRoot.render(<Question/>);
//         productRoot.render(
//             React.createElement(Question));
//     }
// });
