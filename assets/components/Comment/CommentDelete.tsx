import React, {useState} from 'react';
import {deleteComment, updateComment} from "../../services/commentsApi";

function CommentUpdate({question, setQuestion, comment, onCommentDelete, onCancel}) {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // const [newComment, setNewComment] = useState<string>(comment.content);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsDeleting(true);
        setError(null);

        try {
            const deletedComment = await deleteComment(comment.id);
            const updatedQuestion = {...question};

            console.log(updatedQuestion);

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
    };

    return (
        <>
            <p>Do you want to remove this comment ?</p>
            <button
                type="submit"
                className="btn btn-primary me-2"
                disabled={isDeleting}
                onClick={handleSubmit}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
                disabled={isDeleting}
            >
                Cancel
            </button>

        {/*<div className="comment-editor">
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
                        className="btn btn-secondary"
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>*/}
        </>

    );
};

export default CommentUpdate;
