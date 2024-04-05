// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin'), addVariablesForColors],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat']
			},
			colors: {
				// flowbite-svelte
				// purple
				primary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87'
				}
			},
			animation: {
				// ...other animations
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
			},
			keyframes: {
				// ... other keyframes
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))'
					}
				}
			}
		},
		plugins: [
			// ...other plugins
			addVariablesForColors
		]
	}
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

module.exports = config;
