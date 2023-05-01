/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'radical-red': {
					'50': '#fff1f3',
					'100': '#ffe0e5',
					'200': '#ffc6ce',
					'300': '#ff9eac',
					'400': '#ff677d',
					'500': '#fc2847',
					'600': '#ea1837',
					'700': '#c5102a',
					'800': '#a31126',
					'900': '#871526',
					'950': '#4a050f',
			},
			}
		},
	},
	plugins: [],
}
