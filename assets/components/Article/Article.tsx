import React from 'react';
// import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';

interface ArticleProps {
    title: string;
    content: string;
}

export default function Article({ title, content }: ArticleProps) {
    return (
        <article>
            <h1>{title}</h1>

            {/*<div className="article-content">*/}
            {/*    <MarkdownRenderer content={content} />*/}
            {/*</div>*/}
        </article>
    );
}