import Prism from 'prismjs';

export function enhanceMarkdown() {
    document
        .querySelectorAll('#article-container pre code')
        .forEach((block) => {
            Prism.highlightElement(block as HTMLElement);
        });
}