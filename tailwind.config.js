module.exports = {
	content: ['./src/**/*.{html,js,mjs}', './*.{html,js,mjs}'],
	theme: {
		extend: {
			colors: {
				primary1: '#FAF9F6',
				primary2: '#36454F',
				secondary1: '#00897B',
				secondary2: '#F2D1D1',
			},
			fontFamily: {
				primary: ['Roboto', 'sans-serif'],
				secondary: ['Lato', 'sans-serif'],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1080px',
				},
			},
		},
	},
	plugins: [],
};
