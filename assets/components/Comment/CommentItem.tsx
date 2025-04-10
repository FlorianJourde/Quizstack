import React, {useContext, useState} from 'react';
import {MarkdownRenderer} from "../MarkdownRenderer";
import CommentUpdate from "./CommentUpdate";
import CommentDelete from "./CommentDelete";
import {useAuth} from "../../context/AuthContext";

function CommentItem({question, setQuestion, comment, setComment, index}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const {isAuthor} = useAuth();
    const userIsAuthor = isAuthor(comment.author.id);

    console.log(comment.author.id)
    // const { currentUser } = useContext(AuthContext);
    //
    // const isAuthor = currentUser && comment.author.id === currentUser.id;

    const handleCommentUpdated = () => {
        setIsEditing(false);
    };

    const handleCommentDeleted = () => {
        setIsDeleting(false);
    };

    return (
        <div>
            <div>
                <p>Author : {comment.author.username}</p>
                <p>ID : {comment.id}</p>
                <pre>{JSON.stringify(comment.creationDate, null, 2)}</pre>
                <p> Comment {index} :</p>
                <MarkdownRenderer content={comment.content}/>
                {userIsAuthor && (
                    <>
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => setIsDeleting(true)}
                        >
                            Delete
                        </button>
                    </>
                )}
                <br/>
            </div>

            {isEditing &&
                <CommentUpdate
                    question={question}
                    setQuestion={setQuestion}
                    comment={comment}
                    onCommentUpdated={handleCommentUpdated}
                    onCancel={() => setIsEditing(false)}
                />
            }

            {isDeleting &&
                <CommentDelete
                    question={question}
                    setQuestion={setQuestion}
                    comment={comment}
                    onCommentDelete={handleCommentDeleted}
                    onCancel={() => setIsDeleting(false)}
                />
            }

            <br/>
            <br/>
        </div>
    );
}

export default CommentItem;