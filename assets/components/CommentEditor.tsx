import React, {useState} from 'react';
import {updateComment} from "../services/commentsApi";

function CommentEditor({question, setQuestion, comment, setComment, onCommentUpdated, onCancel}) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [newComment, setNewComment] = useState<string>(comment.content);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const updatedComment = await updateComment(comment.id, newComment);
            // console.log(updatedComment);

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

                // setSuccess(true);
                // setIsEditing(false);
            }

            // if (updatedComment && updatedComment.id) {
            //     const updatedQuestion = {...question};
            //
            //     if (!updatedQuestion.comments) {
            //         updatedQuestion.comments = [];
            //     }
            //
            //     updatedQuestion.comments.push(newComment);
            //
            //     setQuestion(updatedQuestion);
            //     setSuccess(true);
            //     setComment('');
            // }

            // setComment(updatedComment.content)

            onCommentUpdated(updatedComment);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="comment-editor">
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
        </div>
    );
};

export default CommentEditor;
