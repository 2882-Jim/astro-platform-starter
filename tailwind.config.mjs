/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,md,ts}'],
    theme: {
        extend: {
            colors: {
                navy: { 50: '#eef3fa', 100: '#d6e1f1', 600: '#1d3d6b', 700: '#162f54', 800: '#10243f', 900: '#0b1a2e' },
                gold: { 300: '#f2d67a', 400: '#e9c24a', 500: '#d4a72c', 600: '#b0861b' }
            },
            fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] }
        }
    }
};
