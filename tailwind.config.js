/** @type {import('tailwindcss').Config} */

const config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                AD: '#a800ff',
            },
        },
    },
    plugins: [],
}

export default config
