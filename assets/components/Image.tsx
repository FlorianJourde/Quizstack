import React from 'react';

function Image({image}) {
    return (
        <>
            {/*<h1>Image found</h1>*/}
            <img src={`/uploads/images/questions/${image}`} className={`mt-4 max-w-full rounded-radius-secondary mx-auto`} alt=""/>
            {/*<img src="/images/logos/markdown-logo.png" alt="Markdown logo"
                 className="h-5 mr-2"/>*/}
        </>
    );
};

export default Image;