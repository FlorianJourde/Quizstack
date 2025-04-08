import React from 'react';

function Comments({comments}) {
    return (
        <>
            <br/>
            <h1>
                Comments
            </h1>
            <div>
                {comments.map((comment, index) => (
                    <div key={`comment-${index}`}>
                        <pre>{JSON.stringify(comment, null, 2)}</pre>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comments;