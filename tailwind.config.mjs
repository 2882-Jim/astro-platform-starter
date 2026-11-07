/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,md,ts}'],
    theme: {
        extend: {
            colors: {
                // Neutral greys; the single brand colour is set in Site settings (brandColour).
                ink: { 50: '#f5f5f4', 100: '#e7e5e4', 600: '#44403c', 700: '#292524', 800: '#1c1917', 900: '#111111' },
                accent: { 500: 'var(--accent)', 600: 'var(--accent)' }
            },
            fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] }
        }
    }
};
