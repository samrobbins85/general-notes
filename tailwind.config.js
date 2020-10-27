const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, "$1")
		.replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
		"./notes/**/*.md",
	],
	theme: {
		fontFamily: {
			mono: ["Jetbrains Mono"],
		},
		extend: {
			maxWidth: {
				ch64: "64ch",
			},
			colors: {
				code: {
					green: "var(--color-code-green)",
					yellow: "var(--color-code-yellow)",
					purple: "var(--color-code-purple)",
					red: "var(--color-code-red)",
					blue: "var(--color-code-blue)",
					white: "var(--color-code-white)",
				},
				"green-150": "#e6ffee",
			},
		},
		typography: (theme) => ({
			default: {
				css: {
					"code::after": {
						content: "none",
					},
					"code::before": {
						content: "none",
					},
					"pre code::after": {
						content: "none",
					},
					code: {
						backgroundColor: theme("colors.gray.200"),
						color: theme("colors.gray.700"),
						padding: "4px",
						borderRadius: rem(2),
					},
					blockquote: {
						quotes: "none",
					},
				},
			},
		}),
	},
	variants: {},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/custom-forms"),
	],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
