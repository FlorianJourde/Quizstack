/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./assets/**/*.js",
        // "./templates/**/*.html.twig",
        './assets/**/*.{js,jsx,ts,tsx}',
        './templates/**/*.{html,twig}',
        './src/**/*.php'
    ],
    theme: {
        extend: {
            colors: {
                'very-light-grey-primary': '#808080',
                'very-light-grey-secondary': '#ababab',
                'light-grey-primary': '#525252',
                'light-grey-secondary': '#656565',
                'grey-primary': '#262626',
                'grey-secondary': '#2b2b2b',
                'dark-grey-primary': '#171717',
                'dark-grey-secondary': '#1d1d1d',
                'very-dark-grey-primary': '#0f0f0f',
                'blue-primary': '#27a2ba',
                'blue-secondary': '#66d9ef',
                // 'green-gradient': 'linear-gradient(to bottom, #7da80d, #59780a)',
                'yellow-primary': '#e6db74',
                'green-primary': '#b7cf3e',
                'green-secondary': '#7da80d',
                'green-tertiary': '#c9ea59',
                'green-quaternary': '#628507',
                'orange-primary': '#b48110',
                'orange-secondary': '#a96712',
                'pink-primary': '#f92672',
                'pink-secondary': '#ff74a6',
                'red-primary': '#c7403e',
                'red-secondary': '#9b2f2d',
                'white-primary': '#ffffff',
                'white-secondary': '#eeeeee',
                'black-primary': '#000000',
            },
            spacing: {
                'spacing-primary': 'var(--spacing-primary)',
                'spacing-secondary': 'var(--spacing-secondary)',
                'spacing-large-primary': 'var(--spacing-large-primary)',
                'spacing-large-secondary': 'var(--spacing-large-secondary)',
                'spacing-very-large-primary': 'var(--spacing-very-large-primary)',
                'spacing-very-large-secondary': 'var(--spacing-very-large-secondary)',
            },
            borderRadius: {
                'radius-primary': 'var(--radius-primary)',
                'radius-secondary': 'var(--radius-secondary)',
            },
            fontFamily: {
                'primary': 'var(--font-primary)',
                'secondary': 'var(--font-secondary)',
            },
            aspectRatio: {
                '4/5': '4 / 5',
            },
        },
    },
    plugins: [],
}
