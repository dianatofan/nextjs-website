/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                tertiary: '#E8B059',
                primary: "#202020"
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                fadeIn2s: 'fadeIn 2s ease-in-out',
                fadeInWithDelay: 'fadeIn 1s ease-in-out 1s', // 1s delay
            },
        },
    },
    plugins: [],
};
