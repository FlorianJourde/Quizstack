import React, {useState} from 'react';
import {updateComment} from "../../services/commentsApi";
import MarkdownInfos from "../MarkdownInfos";

function CommentUpdate({question, setQuestion, comment, onCommentUpdated, onCancel}) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [newComment, setNewComment] = useState<string>(comment.content);
    const [markdownInfos, setMarkdownInfos] = useState<boolean>(false);

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

    function handleShowInfos(e) {
        e.preventDefault();
        setMarkdownInfos(prevState => !prevState);
    };

    return (
        <div className="form-container">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group  w-full">
                  <textarea
                      className="form"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                      required/>
                </div>
                <div className="form-bottom-container justify-between flex gap-4">
                    <div className="buttons-container">
                        <button className={`flex items-center opacity-50`} onClick={handleShowInfos}>
                            <img src="/images/logos/markdown-logo.png" alt="Markdown logo"
                                 className="h-5 mr-2"/>
                            Markdown infos
                        </button>
                    </div>
                    <div className={'buttons-container'}>
                        <button
                            type="button"
                            className="button btn-tertiary"
                            onClick={onCancel}
                            disabled={isSubmitting}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button button-primary"
                            disabled={isSubmitting}>
                            {isSubmitting ? 'Updating' : 'Save'}
                        </button>
                    </div>
                </div>
            </form>

            {markdownInfos && <MarkdownInfos/>}

        </div>
    );
}

export default CommentUpdate;
