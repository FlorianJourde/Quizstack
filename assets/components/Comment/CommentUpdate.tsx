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
        <div className="comment-editor glass flex flex-col">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
          <textarea
              className="form-control"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
              required
          />
                </div>
                <div className="button-group mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary me-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Updating...' : 'Save'}
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentUpdate;
