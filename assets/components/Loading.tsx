import React from 'react';

function Loading() {
    return (
        <>
            <div className="glass box flow-rounded-regular opacity/50">
                <div className="question-header-container flex gap-8 justify-between items-center mb-4">
                    <ul className="tags-container grow-1">
                        <li><span className="tag tag-small">Langage</span></li>
                        <li><span className="tag tag-small">Thematic</span></li>
                    </ul>
                    <div className="flex items-end gap-1"><span
                        className="rounded-sm w-1.5 bg-white/75 h-3 opacity-100"></span><span
                        className="rounded-sm w-1.5 bg-white/75 h-4 opacity-50"></span><span
                        className="rounded-sm w-1.5 bg-white/75 h-5 opacity-50"></span></div>
                </div>
                <div className="question-content-container mt-4 flex flex-col gap-spacing-secondary"><p>The question is
                    loading, it will be shown soon...</p></div>
                <p className="opacity-50 text-sm mt-4">Multiple choices possible.</p></div>
        </>
    );
}

export default Loading;