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
                        <p>{comment.id}</p>
                        <p>{comment.content}</p>
                        {/*<p>{comment.author}</p>*/}
                        <pre>{JSON.stringify(comment.author, null, 2)}</pre>
                        {/*<pre>{JSON.stringify(comment, null, 2)}</pre>*/}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comments;