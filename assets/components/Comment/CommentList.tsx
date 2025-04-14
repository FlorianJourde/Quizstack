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
            {/*<br/>*/}
            {/*<br/>*/}
            <h1>
                Comments
            </h1>
            <ul className={'comments-container flex flex-col glass p-4 bg-dark-grey-secondary'}>
                {question.comments.map((comment, index) => (
                    <CommentItem question={question} setQuestion={setQuestion} comment={comment} index={index}
                                 key={`comment-${index}`}/>
                ))}
            </ul>

            <div className="comment-form flex flex-col gap-4 p-4 glass bg-dark-grey-secondary">
                <h3>Add comment</h3>

                {success && <div className="alert alert-success">Comment add with success !</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit} className={'flex flex-col gap-4 w-full items-end'}>
                    <div className="form-group w-full">
                      <textarea
                          className="form-control"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Your comment..."
                          rows={4}
                          required
                      />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default CommentList;