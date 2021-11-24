module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,eot,svg,ttf,woff,woff2,ico,xml,png,webp,jpg,json,webmanifest,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: '_site/sw.js'
};