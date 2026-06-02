import React, {useEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-yaml';

export function MarkdownRenderer({content}: { content: string; }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        containerRef.current
            .querySelectorAll('pre code')
            .forEach((block) => {
                Prism.highlightElement(block as HTMLElement);
            });
    }, [content]);

    return (
        <div ref={containerRef} className={`flex flex-col gap-spacing-secondary`}>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    );
}