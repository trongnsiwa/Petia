/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				petia: {
					100: '#EAE7B1',
					200: '#A6BB8D',
					300: '#61876E',
					400: '#3C6255'
				},
				accent: '#383838',
				neutral: '#B7B7B7',
				userstory: '#729CAF',
				bug: '#E85F5F'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: []
	}
};
