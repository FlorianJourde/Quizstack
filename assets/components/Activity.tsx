import React, {useEffect, useState} from 'react';
import QuestionContent from "./QuestionContent";
// import {demoAnswers1, demoQuestion1} from "./Demo/demoQuestion1";
import Choices from "./Choices";
import {container, item} from "../motion/animations";
import {motion, AnimatePresence} from "motion/react"
import {demoAnswers1, demoQuestion1} from "./Demo/demoQuestion1";
import {demoAnswers2, demoQuestion2} from "./Demo/demoQuestion2";
import {demoAnswers3, demoQuestion3} from "./Demo/demoQuestion3";
import {demoAnswers4, demoQuestion4} from "./Demo/demoQuestion4";
import {demoAnswers5, demoQuestion5} from "./Demo/demoQuestion5";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {EffectCards} from 'swiper/modules';
import {QuestionInterface, QuestionOrLimitReached} from "../types";
import {CommentInterface} from "../types/comment";
import {getQuestion, getRandomQuestion} from "../services/questionsApi";
import {getLastComments} from "../services/commentsApi";
import CommentItem from "./Comment/CommentItem";
import CommentList from "./Comment/CommentList";
import {ROUTES} from "../utils/routes";
import Loading from "./Loading";


export function Activity({mode}) {
    const [comments, setComments] = useState<CommentInterface[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        loadComments();
    }, []);

    async function loadComments() {
        setLoading(true);

        // const urlFilters = searchForParams();
        console.log(mode);

        try {
            let data: CommentInterface[];

            // if (mode === 'display') {
            data = await getLastComments();
            console.log(data);
            setComments(data);
            // }
        } catch (error) {
            console.error('Error loading comments:', error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loading/>;

    return (
        <>
            {/*<h1>Activity</h1>*/}
            {comments && comments.length > 0 ? (
                <>
                    {/*<h2>Comments</h2>*/}
                    {/*<ul>*/}

                    {/*<CommentList />*/}
                    <motion.ul
                            variants={container}
                            initial="hidden"
                            animate="visible"


                        className={'comments-container flex flex-col glass box bg-dark-grey-secondary'}>

                        {comments.map((comment, index) => (
                            <CommentItem mode={mode} comment={comment} index={index} key={`comment-${index}`}/>
                        ))}
                    </motion.ul>

                    {/*{question.comments.length > 0 ? (*/}
                    {/*    question.comments.map((comment, index) => (*/}
                    {/*        <CommentItem question={question} setQuestion={setQuestion} comment={comment} index={index}*/}
                    {/*                     key={`comment-${index}`}/>*/}
                    {/*    ))*/}
                    {/*) : (*/}
                    {/*    <p>There's no discussion about this question...</p>*/}
                    {/*)}*/}
                </>
            ) : (
                <>
                    {/*<div className="page-header-container">*/}
                    {/*    <h1 className="big-title grow">Limit reached !</h1>*/}
                    {/*</div>*/}
                    <div className="glass box flex flex-col gap-spacing-primary">
                        <div>
                            <h2 className={`small-title`}>There's no comment to show</h2>
                            <p>You can add comments after answering questions !</p>
                        </div>
                        <div className="buttons-container">
                            {/*<a href={ROUTES.HOME} className="button button-tertiary">*/}
                            {/*    Home*/}
                            {/*</a>*/}
                            <a href={ROUTES.QUIZ} className="button button-primary">
                                Play
                            </a>
                        </div>
                    </div>
                </>

            )}
        </>

    );
};

export default Activity;