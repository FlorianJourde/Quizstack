import React, {ReactNode} from 'react';

function Banner() {
    function renderCircles(): ReactNode[] {
        const circles: ReactNode[] = [];

        for (let i = 1; i <= 50; i++) {
            circles.push(
                <div key={`circle-${i}`} className="circle-container">
                    <div className="circle"></div>
                </div>
            );
        }

        return circles;
    }

    return (
        <>
            <section className='rays'>
                <div className='hero'></div>
            </section>

            <div className="particles">
                {renderCircles()}
            </div>
        </>
    );
};

export default Banner;