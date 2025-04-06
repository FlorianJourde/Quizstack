import React from 'react';
import {createRoot} from "react-dom/client";
// import QuestionComponent from "./components/QuestionComponent";

const container = document.getElementById('question-app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <QuestionComponent/>
        {/*<h1>Test Question</h1>*/}
    </React.StrictMode>
)
