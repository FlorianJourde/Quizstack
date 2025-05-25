import React, {useEffect, useState} from 'react';
import {container} from "../../motion/animations";
import {motion} from "motion/react"
import {CommentInterface} from "../../types/comment";
import {getLastComments} from "../../services/commentsApi";
import CommentItem from "../Comment/CommentItem";
import {ROUTES} from "../../utils/routes";
import Loading from "./Loading";

export function Activity({mode}) {
    const [comments, setComments] = useState<CommentInterface[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        loadComments();
    }, []);

    async function loadComments() {
        setLoading(true);

        try {
            let data: CommentInterface[];

            data = await getLastComments();
            setComments(data);
        } catch (error) {
            console.error('Error loading comments:', error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loading/>;

    return (
        <>
            {comments && comments.length > 0 ? (
                <>
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className={'comments-container flex flex-col glass box bg-dark-grey-secondary'}>
                        {comments.map((comment, index) => (
                            <CommentItem mode={mode} comment={comment} index={index} key={`comment-${index}`}/>
                        ))}
                    </motion.ul>
                </>
            ) : (
                <>
                    <div className="glass box flex flex-col gap-spacing-primary">
                        <div>
                            <h2 className={`small-title`}>There's no comment to show</h2>
                            <p>You can add comments after answering questions !</p>
                        </div>
                        <div className="buttons-container">
                            <a href={ROUTES.QUIZ} className="button button-primary">
                                Play
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>

    );
}

export default Activity;