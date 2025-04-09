import React, {useState} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import {updateComment} from "../services/commentsApi";
import CommentEditor from "./CommentEditor";

function Comment({question, setQuestion, comment, setComment, index}) {
    const [isEditing, setIsEditing] = useState(false);

    // const isOwner = currentUserId === comment.user.id;

    const handleCommentUpdated = (updatedComment) => {
        // onCommentUpdated(updatedComment);
        setIsEditing(false);
    };

    // if (isEditing) {
    //     return (
    //         <CommentEditor
    //             comment={comment}
    //             onCommentUpdated={handleCommentUpdated}
    //             onCancel={() => setIsEditing(false)}
    //         />
    //     );
    // }

    async function handleEdition() {
        try {
            // const response = await updateComment(commentId, comment);

        } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    };

    // const handleCommentUpdated = (updatedComment) => {
    //     onCommentUpdated(updatedComment);
    //     setIsEditing(false);
    // };

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
                    setComment={setComment}
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