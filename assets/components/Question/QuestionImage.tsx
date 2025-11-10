import React from 'react';

function QuestionImage({image}) {
    return (
        <>
            <img src={`/uploads/images/questions/${image}`}
                 className={`mt-4 max-h-[350px] lg:max-h-[500px] max-w-full rounded-radius-secondary mx-auto`} alt=""/>
        </>
    );
}

export default QuestionImage;