import React, {useState} from 'react';
import {updateComment} from "../../services/commentsApi";

function CommentUpdate({question, setQuestion, comment, onCommentUpdated, onCancel}) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [newComment, setNewComment] = useState<string>(comment.content);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const updatedComment = await updateComment(comment.id, newComment);

            if (updatedComment && updatedComment.id) {
                const updatedQuestion = {...question};

                if (!updatedQuestion.comments) {
                    updatedQuestion.comments = [];
                }

                const commentIndex = updatedQuestion.comments.findIndex(c => c.id === updatedComment.id);

                if (commentIndex !== -1) {
                    updatedQuestion.comments[commentIndex] = updatedComment;
                } else {
                    updatedQuestion.comments.push(updatedComment);
                }

                setQuestion(updatedQuestion);
            }

            onCommentUpdated(updatedComment);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="comment-editor flex flex-col">
            {error && <div className="alert alert-danger">{error}</div>}

            {/*<form onSubmit={handleSubmit} className={'flex flex-col gap-4 w-full items-end'}>*/}
            {/*    <div className="form-group w-full">*/}

            <form onSubmit={handleSubmit} className={'flex flex-col gap-4 w-full items-end'}>
                <div className="form-group  w-full">
                  <textarea
                      className="form-control"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                      required
                  />
                </div>
                <div className={'buttons-container flex gap-4 justify-end'}>
                    <button
                        type="button"
                        className="btn btn-tertiary"
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Updating...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentUpdate;
