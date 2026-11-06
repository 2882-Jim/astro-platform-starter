/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,md,ts}'],
    theme: {
        extend: {
            colors: {
                navy: { 50: '#f2f4f7', 100: '#dde3eb', 600: '#24406a', 700: '#1a3154', 800: '#132541', 900: '#0c1a2f' },
                accent: { 500: '#a0802e', 600: '#866a22' }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif]
            }
        }
    }
};
