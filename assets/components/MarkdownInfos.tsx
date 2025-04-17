import React from 'react';

function MarkdownInfos() {
    return (
        <ul className={`markdown-info box bg-very-dark-grey-primary rounded-radius-secondary`}>
            <li>
                <p><code>` ... `</code><span className={`muted ml-2`}>Inline code</span></p>
            </li>
            <li>
                <p><code>```javascript ... ```</code><span className={`muted ml-2`}>Code block</span></p>
            </li>
            <li>
                <p><code>* ... *</code><span className={`muted ml-2`}>Italic</span></p>
            </li>
            <li>
                <p><code>** ... **</code><span className={`muted ml-2`}>Bold</span></p>
            </li>
            <li>
                <p><code>[ ... ](https://url.com)</code><span className={`muted ml-2`}>Link</span></p>
            </li>
            <li>
                <p><code>- ...</code><span className={`muted ml-2`}>Unordered list</span></p>
            </li>
            <li>
                <p><code>1. ...</code><span className={`muted ml-2`}>Ordered list</span></p>
            </li>
        </ul>
    );
};

export default MarkdownInfos;