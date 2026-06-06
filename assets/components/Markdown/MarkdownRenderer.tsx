import React, {useEffect, useRef} from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

// Languages
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

// Markup/Web
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';

// Config/Data
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-ini';

// Backend
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-swift';

// Shell
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-powershell';

// Base de données
import 'prismjs/components/prism-graphql';

// DevOps
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-apacheconf';

// Autres
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-regex';
import 'prismjs/components/prism-twig';

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