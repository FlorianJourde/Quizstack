import React from 'react';
import {createRoot} from "react-dom/client";
import Question from "./components/Question";
import './styles/app.css';

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('quiz-container');
    if (questionContainer) {
        const productRoot = createRoot(questionContainer);
        // productRoot.render(<Question/>);
        productRoot.render(React.createElement(Question));
    }
});
