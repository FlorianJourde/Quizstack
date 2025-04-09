import React from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";

function Comments({comments}) {
    return (
        <>
            <br/>
            <br/>
            <h1>
                Comments
            </h1>
            <div>
                {comments.map((comment, index) => (
                    <div key={`comment-${index}`}>
                        <p>
                            Author : {comment.author.username}
                        </p>
                        <p>
                            {/*Creation date : {comment.creation_date}*/}
                        </p>
                        <pre>{JSON.stringify(comment.creationDate, null, 2)}</pre>
                        {/*<p>*/}
                        <p>
                            Comment :
                        </p>
                        <MarkdownRenderer content={comment.content}/>
                        {/*{comment.content}*/}
                        {/*</p>*/}
                        {/*<pre>{JSON.stringify(comment, null, 2)}</pre>*/}

                        <br/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comments;