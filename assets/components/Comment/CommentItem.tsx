import React, {useState} from 'react';
import {MarkdownRenderer} from "../MarkdownRenderer";
import CommentUpdate from "./CommentUpdate";
import CommentDelete from "./CommentDelete";
import {useAuth} from "../../context/AuthContext";
import ProfilePicture from "../ProfilePicture";
import {QuestionInterface} from "../../types";
import {CommentInterface} from "../../types/comment";
import {ROUTES} from "../../utils/routes";
import {item} from "../../motion/animations";
import {motion} from "motion/react"

function CommentItem(
    {
        comment,
        index,
        setQuestion,
        question,
        mode,
    }: {
        comment: CommentInterface;
        index: number;
        question?: QuestionInterface;
        setQuestion?: React.Dispatch<React.SetStateAction<QuestionInterface | null>>;
        mode?: string;
    }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const {formattedDate, formattedTime} = formatDate(comment.creationDate);
    const {isAuthor, isAdmin} = useAuth();
    const userCanEdit = isAuthor(comment.author.id) || isAdmin();

    function handleCommentUpdated() {
        setIsEditing(false);
    }

    function handleCommentDeleted() {
        setIsDeleting(false);
    }

    function handleStartEditing() {
        setIsEditing(true);
        setIsDeleting(false);
    }

    function handleStartDeleting() {
        setIsDeleting(true);
        setIsEditing(false);
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
            <motion.li
                variants={item}

                className={`py-8 first:pt-0 last:pb-0 flex flex-col gap-spacing-primary`}>
                <div className="comment-container flex flex-col gap-spacing-secondary">
                    <div className="comment-header-container flex flex-wrap gap-4 items-center">
                        <div
                            className="user-infos-container flex flex-wrap gap-spacing-secondary items-center grow">

                            <ProfilePicture image={comment.author.image}/>

                            <div className={`flex flex-col gap-2`}>
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

                        </div>
                        <div className="buttons-container grow">
                            {userCanEdit && (
                                <>
                                    <button className="button button-action" onClick={() => handleStartEditing()}>
                                        <span className="material-icons">edit</span>
                                    </button>
                                    <button className="button button-action" onClick={() => handleStartDeleting()}>
                                        <span className="material-icons">delete</span>
                                    </button>
                                </>
                            )}
                            {mode === 'display' && (
                                <>
                                    <a href={`${ROUTES.QUESTION}/${comment.questionId}`}
                                       className="button button-action">
                                        <span className="material-icons">visibility</span>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="comment-body-container">
                        <MarkdownRenderer content={comment.content}/>
                    </div>
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

            </motion.li>
        </>
    );
}

export default CommentItem;