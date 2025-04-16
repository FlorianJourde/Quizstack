import React, {useState} from 'react';
import {addComment} from "../../services/commentsApi";
import CommentItem from "./CommentItem";

function CommentList({question, setQuestion}) {
    const [comment, setComment] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const newComment = await addComment(question.id, comment);

            if (newComment && newComment.id) {
                const updatedQuestion = {...question};

                if (!updatedQuestion.comments) {
                    updatedQuestion.comments = [];
                }

                updatedQuestion.comments.push(newComment);

                setQuestion(updatedQuestion);
                setSuccess(true);
                setComment('');
            }

        } catch (error) {
            console.error('Error submitting answers : ', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <div className="page-separator-container">
                <h2 className={'title'}>Comments</h2>
            </div>
            <ul className={'comments-container flex flex-col glass box bg-dark-grey-secondary'}>
                {question.comments.length > 1 ? (
                    question.comments.map((comment, index) => (
                        <CommentItem question={question} setQuestion={setQuestion} comment={comment} index={index}
                                     key={`comment-${index}`}/>
                    ))
                ) : (
                    <p>There's no discussion about this question...</p>
                )}
            </ul>

            <div className="form-container gap-4 glass box bg-dark-grey-secondary">

                <h2 className="small-title">Add comment</h2>

                {success && <div className="alert alert-success">Comment add with success !</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group w-full">
                      <textarea
                          className="form"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Your comment..."
                          rows={4}
                          required
                      />
                    </div>
                    <div className="buttons-container">
                        <button
                            type="submit"
                            className="button button-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CommentList;