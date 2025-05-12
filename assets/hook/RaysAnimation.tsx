import { useEffect } from 'react';
import {QuestionInterface} from "../types";

function useRaysAnimation(question: QuestionInterface, mode: string) {
    useEffect(function() {
        const originalElement = document.querySelector('.rays');

        if (mode === 'display' || mode === 'share') return;

        if (originalElement) {
            if (question.correctChoices) {
                const clonedElement = originalElement.cloneNode(true) as HTMLElement;
                const colorClass = question.isMatch === true ? 'green' : 'red';

                clonedElement.classList.add(colorClass);
                clonedElement.classList.add('hide');

                originalElement.parentNode?.insertBefore(clonedElement, originalElement.nextSibling);
                originalElement.classList.add('hide');

                requestAnimationFrame(() => {
                    clonedElement.classList.remove('hide');
                });

                setTimeout(function() {
                    originalElement.remove();
                }, 1000);
            } else {
                const clonedElement = originalElement.cloneNode(true) as HTMLElement;
                clonedElement.classList.add('hide');

                originalElement.parentNode?.insertBefore(clonedElement, originalElement.nextSibling);
                originalElement.classList.add('hide');

                requestAnimationFrame(() => {
                    clonedElement.classList.remove('hide');
                    clonedElement.classList.remove('green');
                    clonedElement.classList.remove('red');
                });

                setTimeout(function() {
                    originalElement.remove();
                }, 1000);
            }
        }
    }, [question, mode]);
}

export default useRaysAnimation;