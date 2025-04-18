import React, {useState} from 'react';
import {deleteComment} from "../../services/commentsApi";

function CommentUpdate({question, setQuestion, comment, onCommentDelete, onCancel}) {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsDeleting(true);
        setError(null);

        try {
            const deletedComment = await deleteComment(comment.id);
            const updatedQuestion = {...question};

            if (updatedQuestion.comments) {
                updatedQuestion.comments = updatedQuestion.comments.filter(c => c.id !== comment.id);
                setQuestion(updatedQuestion);
            }

            onCommentDelete(deletedComment);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <>
            <div className="form-container">
                <p>Do you want to remove this comment ?</p>
                <div className={'buttons-container'}>
                    <button
                        type="button"
                        className="button button-tertiary"
                        onClick={onCancel}
                        disabled={isDeleting}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="button button-primary button-red"
                        disabled={isDeleting}
                        onClick={handleSubmit}>
                        {isDeleting ? 'Deleting' : 'Delete'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default CommentUpdate;
