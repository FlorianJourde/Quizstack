import React, {useState} from 'react';
import {addComment} from "../../services/commentsApi";
import CommentItem from "./CommentItem";
import {useAuth} from "../../context/AuthContext";
import {ROUTES} from "../../utils/routes";
import MarkdownInfos from "../MarkdownInfos";

function CommentList({question, setQuestion}) {
    const [comment, setComment] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [markdownInfos, setMarkdownInfos] = useState<boolean>(false);
    const {isAuthenticated} = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

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
            console.error('Error submitting comment:', error);
            setError('Failed to add comment: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleShowInfos(e) {
        e.preventDefault();
        setMarkdownInfos(prevState => !prevState);
    };

    return (
        <>
            <div className="page-separator-container">
                <h2 className={'title'}>Comments</h2>
            </div>
            <ul className={'comments-container flex flex-col glass box bg-dark-grey-secondary'}>
                {question.comments.length > 0 ? (
                    question.comments.map((comment, index) => (
                        <CommentItem comment={comment} index={index} question={question} setQuestion={setQuestion}
                                     key={`comment-${index}`}/>
                    ))
                ) : (
                    <p>There's no discussion about this question...</p>
                )}
            </ul>

            {isAuthenticated() ? (
                <div className="form-container gap-4 glass box bg-dark-grey-secondary">

                    <h2 className="small-title">
                        <span className="material-icons">chat_bubble</span>
                        Join the conversation
                    </h2>

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
                                required/>
                        </div>
                        <div className="form-bottom-container flex-wrap justify-between flex gap-4">
                            <div className="buttons-container">
                                <button className={`flex items-center opacity-50`} onClick={handleShowInfos}>
                                    <img src="/images/logos/markdown-logo.png" alt="Markdown logo"
                                         className="h-5 mr-2"/>
                                    Markdown infos
                                </button>
                            </div>
                            <div className="buttons-container grow">
                                <button
                                    type="submit"
                                    className="button button-primary"
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending' : 'Send'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {markdownInfos && <MarkdownInfos/>}

                </div>
            ) : (
                <div className="glass box flex flex-col gap-spacing-primary">
                    <div>
                        <h2 className={'small-title'}>
                            <span className="material-icons">chat_bubble</span>
                            Wanna join the conversation ?
                        </h2>
                        <p>Please login or register !</p>
                    </div>
                    <div className="buttons-container">
                        <a href={ROUTES.LOGIN} className="button button-tertiary">
                            Login
                        </a>
                        <a href={ROUTES.REGISTER} className="button button-primary">
                            Register
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default CommentList;