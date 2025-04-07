import React from 'react';
import PropTypes from 'prop-types';

Explanation.propTypes = {};

function Explanation({explanation}) {
    return (
        <div>
            {/*Explanation*/}
            <h2>
                {explanation}
            </h2>

            <br/>
        </div>
    );
}

export default Explanation;
