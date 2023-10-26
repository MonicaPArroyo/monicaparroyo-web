module.exports = {
	i18n: {
		defaultLocale: 'es',
		locales: ['en', 'es'],
	},
	debug: false,

	/** To avoid issues when deploying to some paas (vercel...) */
	localePath:
		typeof window === 'undefined'
			? require('path').resolve('./public/locales')
			: '/locales',

	reloadOnPrerender: false,
};
