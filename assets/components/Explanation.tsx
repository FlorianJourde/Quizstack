import React, {useEffect} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import {item} from "../motion/animations";
import {motion} from "motion/react";
import Sidebar from "./Sidebar";

function Explanation({question, mode = 'display'}) {
    return (
        <motion.div
            variants={item}
            className={`question-bottom-container mt-4 flex flex-col gap-spacing-secondary`}>

            {mode === 'game' ? (
                <h3 className={`text-lg font-semibold`}>{question.isMatch ? 'Correct !' : 'Incorrect...'} Here's an
                    explanation</h3>
            ) : (
                <h3 className={`text-lg font-semibold`}>Explanation</h3>
            )}

            <MarkdownRenderer content={question.explanation}/>
        </motion.div>
    );
}

export default Explanation;
