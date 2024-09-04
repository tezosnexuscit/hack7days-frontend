import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				tenk24: '1025px'
			},
			colors: {
				'tez-blue': '#47505E',
				'btn-blue': '#1F6FFE',
				'btn-green': '#22C55E',
				'day-grey': '#E5E5E5',
				'tez-yellow': '#FDD917'
			},
			fontFamily: {
				'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
				montserrat: ['Montserrat Variable', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
