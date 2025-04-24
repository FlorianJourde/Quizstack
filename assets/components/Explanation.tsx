import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import {item} from "../motion/animations";
import {motion} from "motion/react";

function Explanation({question}) {
    return (
        <motion.div
            variants={item}
            className={`question-bottom-container mt-4`}>
            <h3 className={`small-title`}>Explanation</h3>
            <MarkdownRenderer content={question.explanation}/>
        </motion.div>
    );
}

export default Explanation;
