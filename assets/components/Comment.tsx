import React, {useState} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import CommentEditor from "./CommentEditor";

function Comment({question, setQuestion, comment, setComment, index}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleCommentUpdated = () => {
        setIsEditing(false);
    };

    return (
        <div>
            <div>
                <p>Author : {comment.author.username}</p>
                <p>ID : {comment.id}</p>
                <pre>{JSON.stringify(comment.creationDate, null, 2)}</pre>
                <p> Comment {index} :</p>
                <MarkdownRenderer content={comment.content}/>
                {/*{isOwner && (*/}
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
                {/*)}*/}
                <br/>
            </div>

            {isEditing &&
                <CommentEditor
                    question={question}
                    setQuestion={setQuestion}
                    comment={comment}
                    onCommentUpdated={handleCommentUpdated}
                    onCancel={() => setIsEditing(false)}
                />
            }

            <br/>
            <br/>
        </div>
    );
}

export default Comment;