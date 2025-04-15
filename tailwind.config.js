/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./assets/**/*.js",
        // "./templates/**/*.html.twig",
        './assets/**/*.{js,jsx,ts,tsx}',
        './templates/**/*.{html,twig}',
    ],
    theme: {
        extend: {
            colors: {
                'light-grey-primary': '#525252',
                'light-grey-secondary': '#656565',
                'grey-primary': '#262626',
                'grey-secondary': '#2b2b2b',
                'dark-grey-primary': '#171717',
                'dark-grey-secondary': '#1d1d1d',
                'very-dark-grey-primary': '#0f0f0f',
                // 'blue-primary': '#009de0',
                'blue-primary': '#27a2ba',
                'green-primary': '#b7cf3e',
                'green-secondary': '#97b112',
                'red-primary': '#c7403e',
                'red-secondary': '#9b2f2d',
                'white-primary': '#ffffff',
                'white-secondary': '#eeeeee',
            },
        },
    },
    plugins: [],
}
