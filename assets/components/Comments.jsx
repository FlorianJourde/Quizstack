import React from 'react';
import PropTypes from 'prop-types';
import Answer from "./Answer";

// Comments.propTypes = {
//
// };

function Comments({comments}) {
    return (
        <>
            <br/>
            <h1>
                Comments
            </h1>
            <div>
                {comments.map((comment, index) => (
                    <div key={`comment-${index}`}>
                        {/*{comment}*/}
                        <pre>{JSON.stringify(comment, null, 2)}</pre>
                        {/*<pre>{JSON.stringify(comment, null, 2)}</pre>*/}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comments;