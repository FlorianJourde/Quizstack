import React, {useState} from 'react';
import {MarkdownRenderer} from "../MarkdownRenderer";
import CommentUpdate from "./CommentUpdate";
import CommentDelete from "./CommentDelete";
import {useAuth} from "../../context/AuthContext";

function CommentItem({question, setQuestion, comment, index}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const {isAuthor} = useAuth();
    const userIsAuthor = isAuthor(comment.author.id);
    const {formattedDate, formattedTime} = formatDate(comment.creationDate);

    function handleCommentUpdated() {
        setIsEditing(false);
    }

    function handleCommentDeleted() {
        setIsDeleting(false);
    }

    function formatDate(dateObject) {
        const date = new Date(dateObject.date);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return {
            formattedDate: `${day}/${month}/${year}`,
            formattedTime: `${hours}:${minutes}`
        };
    }

    return (
        <>
            {index !== 0 && <hr className="h-[2px] bg-white/10 border-0"/>}
            <li className={`py-8 first:pt-0 last:pb-0 flex flex-col gap-spacing-primary`}>
                <div className="comment-container flex flex-col gap-spacing-secondary">
                    <div className="comment-header-container flex gap-4 items-center">
                        <div className="user-infos-container flex gap-8 items-center grow">
                            <p>{comment.author.username}</p>
                            <div className="date-container flex gap-4  items-center">
                                <p className={'flex items-center muted'}><span
                                    className="material-icons mr-2 md-14">calendar_today</span><span>{formattedDate}</span>
                                </p>
                                <p className={'flex items-center muted'}><span
                                    className="material-icons mr-2 md-14">schedule</span><span>{formattedTime}</span>
                                </p>
                            </div>
                        </div>
                        <div className="buttons-container">
                            {userIsAuthor && (
                                <>
                                    <button className="button button-action" onClick={() => setIsEditing(true)}>
                                        <span className="material-icons">edit</span>
                                    </button>
                                    <button className="button button-action" onClick={() => setIsDeleting(true)}>
                                        <span className="material-icons">delete</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                    <MarkdownRenderer content={comment.content}/>
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
            </li>
        </>
    );
}

export default CommentItem;