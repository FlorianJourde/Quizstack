import React from "react";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {okaidia} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function MarkdownRenderer({content}: { content: string }) {
    return (
        <ReactMarkdown
            components={{
                code({children, className, node, style, ref, ...rest}) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = Array.isArray(children) ? children.join("") : String(children);

                    return match ? (
                        <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            style={okaidia}
                            className="code-wrapper"
                            {...rest}
                        >
                            {codeString.replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...rest}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}