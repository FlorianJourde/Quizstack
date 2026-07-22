import { useEffect } from 'react';
import { QuestionInterface } from "../types";

function useMotionBannerAnimation(question: QuestionInterface, mode: string) {
    useEffect(function () {
        if (mode === 'display' || mode === 'share') return;

        const element = document.querySelector('.motion-banner');

        if (!element) return;

        element.classList.remove('green', 'red');

        if (question.correctChoices) {
            const colorClass = question.isMatch === true ? 'green' : 'red';
            element.classList.add(colorClass);
        }
    }, [question, mode]);
}

export default useMotionBannerAnimation;