import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';

function InfiniteSlider() {
    const logos = [
        { src: `/images/logos/css3-logo.png`, alt: "CSS logo" },
        { src: `/images/logos/javascript-logo.png`, alt: "JavaScript logo" },
        { src: `/images/logos/docker-logo.png`, alt: "Docker logo" },
        { src: `/images/logos/next-js-logo.png`, alt: "Next.js logo" },
        { src: `/images/logos/react-logo.png`, alt: "React logo" },
        { src: `/images/logos/html-logo.png`, alt: "HTML logo" },
        { src: `/images/logos/sass-logo.png`, alt: "Sass logo" },
        { src: `/images/logos/symfony-logo-2.png`, alt: "Symfony logo" },
        { src: `/images/logos/tailwindcss-logo.png`, alt: "TailwindCSS logo" },
        { src: `/images/logos/vue-js-logo.png`, alt: "Vue.js logo" },
        { src: `/images/logos/wordpress-logo.png`, alt: "Wordpress logo" },
        { src: `/images/logos/python-logo.png`, alt: "Python logo" },
        { src: `/images/logos/git-logo.png`, alt: "Git logo" },
        { src: `/images/logos/node-js-logo.png`, alt: "Node.js logo" },
        { src: `/images/logos/php-logo.png`, alt: "PHP logo" },
        { src: `/images/logos/typescript-logo.png`, alt: "TypeScript logo" },
        { src: `/images/logos/django-logo.png`, alt: "Django logo" },
        { src: `/images/logos/angular-logo.png`, alt: "Angular logo" },
        { src: `/images/logos/twig-logo.png`, alt: "Twig logo" },
        { src: `/images/logos/github-logo.png`, alt: "GitHub logo" },
        { src: `/images/logos/laravel-logo.png`, alt: "Laravel logo" },
        { src: `/images/logos/mysql-logo.png`, alt: "MySQL logo" },
        { src: `/images/logos/express-logo.png`, alt: "ExpressJS logo" },
        { src: `/images/logos/gitlab-logo.png`, alt: "GitLab logo" },
    ];

    return (
        <div className="logos">
            <div className="logos-slide">
                {logos.map((l, i) => (
                    <img key={`a-${i}`} src={l.src} alt={l.alt} />
                ))}
            </div>
            {/*<div className="logos-slide" aria-hidden="true">*/}
            {/*    {logos.map((l, i) => (*/}
            {/*        <img key={`b-${i}`} src={l.src} alt={l.alt} />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}

export default InfiniteSlider;

// function InfiniteSlider() {
//
//     return (
//         <>
//             <div className="logos">
//                 <div className="logos-slide">
//                     <img src={`/images/logos/css3-logo.png`} alt="CSS logo"/>
//                     <img src={`/images/logos/javascript-logo.png`} alt="JavaScript logo"/>
//                     <img src={`/images/logos/docker-logo.png`} alt="Docker logo"/>
//                     <img src={`/images/logos/next-js-logo.png`} alt="Next.js logo"/>
//                     <img src={`/images/logos/react-logo.png`} alt="React logo"/>
//                     <img src={`/images/logos/html-logo.png`} alt="HTML logo"/>
//                     <img src={`/images/logos/sass-logo.png`} alt="Sass logo"/>
//                     <img src={`/images/logos/symfony-logo-2.png`} alt="Symfony logo"/>
//                     <img src={`/images/logos/tailwindcss-logo.png`} alt="TailwindCSS logo"/>
//                     <img src={`/images/logos/vue-js-logo.png`} alt="Vue.js logo"/>
//                     <img src={`/images/logos/wordpress-logo.png`} alt="Wordpress logo"/>
//                     <img src={`/images/logos/python-logo.png`} alt="Python logo"/>
//                     <img src={`/images/logos/git-logo.png`} alt="Git logo"/>
//                     <img src={`/images/logos/node-js-logo.png`} alt="Node.js logo"/>
//                     <img src={`/images/logos/php-logo.png`} alt="PHP logo"/>
//                     <img src={`/images/logos/typescript-logo.png`} alt="TypeScript logo"/>
//                     <img src={`/images/logos/django-logo.png`} alt="Django logo"/>
//                     <img src={`/images/logos/angular-logo.png`} alt="Angular logo"/>
//                     <img src={`/images/logos/twig-logo.png`} alt="Twig logo"/>
//                     <img src={`/images/logos/github-logo.png`} alt="GitHub logo"/>
//                     <img src={`/images/logos/laravel-logo.png`} alt="Laravel logo"/>
//                     <img src={`/images/logos/mysql-logo.png`} alt="MySQL logo"/>
//                     <img src={`/images/logos/express-logo.png`} alt="ExpressJS logo"/>
//                     <img src={`/images/logos/gitlab-logo.png`} alt="GitLab logo"/>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default InfiniteSlider;