import React, {useState} from 'react';
import {MarkdownRenderer} from "./MarkdownRenderer";
import {submitAnswers} from "../services/questionsApi";
import {addComment} from "../services/commentsApi";

function Comments({question, setQuestion}) {
    const [comment, setComment] = useState<string>('')
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setError(null);
    //
    //     try {
    //         const response = await axios.post('/api/questions/' + questionId + '/comments', {
    //             content: comment
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //
    //         setSuccess(true);
    //         setComment('');
    //         // Éventuellement, mettre à jour la liste des commentaires
    //     } catch (err) {
    //         setError(err.response?.data?.message || 'Une erreur est survenue');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(question.id);
        console.log(comment);
        console.log(question.comments);
        // console.log

        try {
            const newComment = await addComment(question.id, comment);
            // setResult(result);
            console.log(newComment);
            // setQuestion()

            if (newComment && newComment.id) {
                const updatedQuestion = { ...question };

                if (!updatedQuestion.comments) {
                    updatedQuestion.comments = [];
                }

                updatedQuestion.comments.push(newComment);

                setQuestion(updatedQuestion);
            }

        } catch (error) {
            console.error('Error submitting answers : ', error);
        }
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // setIsSubmitting(true);
    //     // setError(null);
    //
    //
    //     // try {
    //     //     const result = await submitAnswers(question?.id, answers);
    //     //     setResult(result);
    //     // } catch (error) {
    //     //     console.error('Error submitting answers : ', error);
    //     // }
    //
    //     try {
    //         const response = await axios.post('/api/questions/' + questionId + '/comments', {
    //             content: comment
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //
    //         // setSuccess(true);
    //         // setComment('');
    //         // Éventuellement, mettre à jour la liste des commentaires
    //     } catch (err) {
    //         // setError(err.response?.data?.message || 'Une erreur est survenue');
    //     } finally {
    //         // setIsSubmitting(false);
    //     }
    // };

    return (
        <>
            <br/>
            <br/>
            <h1>
                Comments
            </h1>
            <div>
                {question.comments.map((comment, index) => (
                    <div key={`comment-${index}`}>
                        <p>
                            Author : {comment.author.username}
                        </p>
                        <p>
                            {/*Creation date : {comment.creation_date}*/}
                        </p>
                        <pre>{JSON.stringify(comment.creationDate, null, 2)}</pre>
                        {/*<p>*/}
                        <p>
                            Comment :
                        </p>
                        <MarkdownRenderer content={comment.content}/>
                        {/*{comment.content}*/}
                        {/*</p>*/}
                        {/*<pre>{JSON.stringify(comment, null, 2)}</pre>*/}

                        <br/>
                    </div>
                ))}
            </div>
            <div className="comment-form">
                <h3>Ajouter un commentaire</h3>
                {/*{success && <div className="alert alert-success">Comment add with success !</div>}*/}
                {/*{error && <div className="alert alert-danger">{error}</div>}*/}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <textarea
                          className="form-control bg-black"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Votre commentaire..."
                          rows={4}
                          required
                      />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        // disabled={isSubmitting}
                    >
                        Send
                        {/*{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}*/}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Comments;