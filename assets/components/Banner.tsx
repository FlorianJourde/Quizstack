import React from 'react';

export function Banner({color = ''}: {color?: string }) {
    const particles = Array.from({length: 50}, (_, index) => index + 1);

    return (
        <>
            <section className={`rays ${color}`}>
                <div className='glow'></div>
                <div className='hero'></div>
            </section>

            <div className="particles">
                {particles.map((index) => (
                    <div key={index} className="circle-container">
                        <div className="circle"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Banner;