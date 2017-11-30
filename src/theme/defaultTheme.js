const defaultTheme = {
	primary: '#3f51b5',
	accent: '#ff4081',
	white: '#ffffff',
	error: '#f44336',

	elevation: {
		property: 'box-shadow',
		transition: {
			duration: '280ms',
			effect: 'cubic-bezier(.4, 0, .2, 1)'
		},
		colors: {
			umbra: 'rgba(0, 0, 0, 0.2)',
			penumbra: 'rgba(0, 0, 0, 0.14)',
			ambient: 'rgba(0, 0, 0, 0.12)'
		}
	},

	textColors: {
		primary: 'rgba(0, 0, 0, 0.87)',
		secondary: 'rgba(0, 0, 0, 0.54)',
		hint: 'rgba(0, 0, 0, 0.38)',
		disabled: 'rgba(0, 0, 0, 0.38)',
		icon: 'rgba(0, 0, 0, 0.54)'
	}
};

export default defaultTheme;